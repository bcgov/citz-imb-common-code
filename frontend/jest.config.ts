import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  // coverageDirectory: 'coverage',
  // coverageReporters: ['json', 'lcov', 'text', 'clover'],
  // coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  // testEnvironment: 'jsdom',
  // testURL: 'http://localhost',
  // testPathIgnorePatterns: ['/node_modules/', '/tests/'],
  // globals: {
  //   'ts-jest': {
  //     tsconfig: 'tsconfig.json',
  //     diagnostics: {
  //       ignoreCodes: [151001],
  //     },
  //   },
  // },
};

export default config;
