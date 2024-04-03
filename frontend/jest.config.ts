import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  ...defaults,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'cjs', 'jsx', 'mts', 'cts', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
};

export default config;
