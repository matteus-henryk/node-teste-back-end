// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig');

module.exports = {
  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/src/tests/*.ts'],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  preset: 'ts-jest',

  testEnvironment: 'node',

  testMatch: ['**/*.spec.ts'],
};
