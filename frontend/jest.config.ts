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
  coveragePathIgnorePatterns: ['index.ts', 'config.ts', 'main.tsx', 'Router.tsx'],
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
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/__mocks__/imageMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.ts'],
  testMatch: ['**/*.test.*'],
  verbose: true,
};

export default config;
