// Keep the public serialization namespace and generated clients cheap to import.
// Load each schema when it is used, rather than loading the entire barrel.
import { schemaLoaders } from "./schema-map";

type Serializers = typeof import("./index");

function loader(key: PropertyKey): (() => unknown) | undefined {
    return typeof key === "string" && Reflect.getOwnPropertyDescriptor(schemaLoaders, key) !== undefined
        ? schemaLoaders[key]
        : undefined;
}

export const serialization: Serializers = new Proxy({} as Serializers, {
    get(_target, key) {
        return loader(key)?.();
    },
    has(_target, key) {
        return loader(key) !== undefined;
    },
    ownKeys() {
        return Object.keys(schemaLoaders);
    },
    getOwnPropertyDescriptor(_target, key) {
        const load = loader(key);
        return load === undefined ? undefined : { enumerable: true, configurable: true, get: load };
    },
});
