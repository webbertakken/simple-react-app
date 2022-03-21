import { pathsToModuleNameMapper } from 'ts-jest/utils'

/**
 * Based on https://github.com/vercel/next.js/issues/8663#issuecomment-802289395
 *
 * @type {import('ts-jest/dist/types').InitialOptionsTsJest}
 * */
const config = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next|out|cypress)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  // watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    '\\.(css|scss)$': ['identity-obj-proxy'],
    '\\.(jpg|jpeg|png|gif|svg)$': ['<rootDir>/tests/__mocks__/fileMock.js'],
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
}

export default config
