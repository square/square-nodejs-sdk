// Fern regenerates the clients and schemas. Reapply lazy imports before compiling a release.
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const sourceRoot = fileURLToPath(new URL("../src", import.meta.url));
const serializationRoot = join(sourceRoot, "serialization");

function update(path, transform) {
    const original = readFileSync(path, "utf8");
    const result = transform(original);
    if (result !== original) writeFileSync(path, result);
    return result !== original;
}

function walk(path) {
    for (const entry of readdirSync(path, { withFileTypes: true })) {
        const child = join(path, entry.name);
        if (entry.isDirectory()) walk(child);
        else if (entry.name === "Client.ts") {
            update(child, (source) =>
                source.replace(
                    /import \* as serializers from "([./]+serialization)\/index";/g,
                    'import { serialization as serializers } from "$1/lazy";',
                ),
            );
        }
    }
}

walk(join(sourceRoot, "api"));

const modifiedSerializationFiles = [];

function walkSerialization(path) {
    for (const entry of readdirSync(path, { withFileTypes: true })) {
        const child = join(path, entry.name);
        if (entry.isDirectory()) walkSerialization(child);
        else if (entry.name.endsWith(".ts")) {
            const changed = update(child, (source) => {
                let barrel;
                source = source.replace(/import \* as serializers from "([^"]+)";/g, (statement, module) => {
                    if (resolve(dirname(child), module) !== join(serializationRoot, "index")) return statement;
                    barrel = module;
                    return `import { serialization as serializers } from "${module.replace(/index$/, "lazy")}";`;
                });
                if (!barrel) {
                    const match = source.match(/import \{ serialization as serializers \} from "([^"]+\/lazy)";/);
                    if (match && resolve(dirname(child), match[1]) === join(serializationRoot, "lazy")) {
                        barrel = match[1].replace(/lazy$/, "index");
                    }
                }
                if (barrel) {
                    source = source.replace(/import type \* as serializerTypes from "[^"]+";\n/g, "");
                    source = source.replace(/serializers((?:\.[A-Za-z_$][\w$]*)+\.Raw)/g, "serializerTypes$1");
                    if (source.includes("serializerTypes.")) {
                        const lazyImport = `import { serialization as serializers } from "${barrel.replace(/index$/, "lazy")}";`;
                        source = source.replace(
                            lazyImport,
                            `import type * as serializerTypes from "${barrel}";\n${lazyImport}`,
                        );
                    }
                }
                return source.replace(/^\n(?=\/\/ This file was auto-generated)/, "");
            });
            if (changed) modifiedSerializationFiles.push(child);
        }
    }
}

walkSerialization(serializationRoot);

update(join(sourceRoot, "Client.ts"), (source) => {
    const clients = [...source.matchAll(/import \{ (\w+Client) \} from "(\.\/api\/[^"]+)";/g)];
    for (const [, name, module] of clients) {
        source = source.replace(`import { ${name} } from "${module}";`, `import type { ${name} } from "${module}";`);
        source = source.replaceAll(
            `new ${name}(this._options)`,
            `new (\n            require("${module}") as typeof import("${module}")\n        ).${name}(this._options)`,
        );
    }
    return source;
});

const configPath = fileURLToPath(new URL("../tsconfig.json", import.meta.url));
const config = ts.readConfigFile(configPath, ts.sys.readFile);
if (config.error) throw new Error(ts.flattenDiagnosticMessageText(config.error.messageText, "\n"));
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, dirname(configPath));
const program = ts.createProgram(parsed.fileNames, parsed.options);
const checker = program.getTypeChecker();
const entry = program.getSourceFile(join(serializationRoot, "index.ts"));
if (!entry) throw new Error("Missing serialization entrypoint");
const moduleSymbol = checker.getSymbolAtLocation(entry);
if (!moduleSymbol) throw new Error("Missing serialization exports");

const loaders = checker.getExportsOfModule(moduleSymbol).map((exported) => {
    const symbol = exported.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exported) : exported;
    const declaration = symbol.declarations?.find(ts.isVariableDeclaration) ?? symbol.declarations?.[0];
    if (!declaration) throw new Error(`Missing declaration for ${exported.name}`);
    let module = relative(serializationRoot, declaration.getSourceFile().fileName)
        .replace(/\\/g, "/")
        .replace(/\.ts$/, "");
    if (!module.startsWith(".")) module = `./${module}`;
    const value = ts.isSourceFile(declaration) ? `require("${module}")` : `require("${module}").${exported.name}`;
    return `    ${JSON.stringify(exported.name)}: () => ${value},`;
});

const mapPath = join(serializationRoot, "schema-map.ts");
const map = `// Generated by scripts/optimize-imports.mjs from Fern's serialization exports.\nexport const schemaLoaders: Record<string, () => unknown> = {\n${loaders.join("\n")}\n};\n`;
writeFileSync(mapPath, map);
execFileSync(process.execPath, [
    fileURLToPath(new URL("../node_modules/@biomejs/biome/bin/biome", import.meta.url)),
    "format",
    "--write",
    mapPath,
    ...modifiedSerializationFiles,
]);
