import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest/presets/js-with-ts',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
    '^.+\\.ts?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!@bcgov/citz-imb-sso-react)'],
  testPathIgnorePatterns: ['node_modules/', 'build/', 'setupTests.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coveragePathIgnorePatterns: ['index.ts', 'config.ts', 'main.tsx'],
  coverageReporters: [['lcov', { projectRoot: '..' }]],
  coverageThreshold: {
    global: {
      branches: 80, // Possible paths the logic could follow
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  roots: ['.'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    ...(pathsToModuleNameMapper(
      compilerOptions.paths ?? {
        '@/*': ['src/*'],
      },
    ) ?? {}),
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.ts'],
  testMatch: ['**/*.test.*'],
  verbose: true,
};

export default config;
