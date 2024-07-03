import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/app/pass_checker' // source code
const baseTestDir = '<rootDir>/src/test/pass_checker' // test code

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    `${baseDir}/**/*.ts`
  ],
  testMatch: [
    `${baseTestDir}/**/*.ts` // Define the pattern to find the tests file
  ],
}

export default config;