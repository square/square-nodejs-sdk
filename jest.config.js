module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsConfig: 'tsconfig.base.json',
    },
  },
};
