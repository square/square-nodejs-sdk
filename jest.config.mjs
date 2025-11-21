/** @type {import('jest').Config} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    projects: [
        {
            displayName: "unit",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests"],
            testPathIgnorePatterns: ["\.browser\.(spec|test)\.[jt]sx?$", "/tests/wire/", "/tests/integration/"],
            setupFilesAfterEnv: ["<rootDir>/tests/setup.ts", "<rootDir>/tests/bigint.setup.ts"],
            transformIgnorePatterns: ["node_modules/(?!(msw|@mswjs|@bundled-es-modules|until-async)/)"],
            transform: {
                "^.+\\.tsx?$": "ts-jest",
                "^.+\\.m?jsx?$": "ts-jest",
            },
        },
        {
            displayName: "wire",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests/wire"],
            setupFilesAfterEnv: [
                "<rootDir>/tests/setup.ts",
                "<rootDir>/tests/bigint.setup.ts",
                "<rootDir>/tests/mock-server/setup.ts"
            ],
            transformIgnorePatterns: ["node_modules/(?!(msw|@mswjs|@bundled-es-modules|until-async)/)"],
            transform: {
                "^.+\\.tsx?$": "ts-jest",
                "^.+\\.m?jsx?$": "ts-jest",
            },
        },
        {
            displayName: "integration",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests/integration"],
            transformIgnorePatterns: ["node_modules/(?!(msw|@mswjs|@bundled-es-modules|until-async)/)"],
            transform: {
                "^.+\\.tsx?$": "ts-jest",
                "^.+\\.m?jsx?$": "ts-jest",
            },
        },
    ],
    workerThreads: false,
    passWithNoTests: true,
};
