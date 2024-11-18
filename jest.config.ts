import type { Config } from "jest"

const config: Config = {
  // Automatically clear mock calls, instances, contexts, and results before every test
  clearMocks: true,

  // Collect coverage information
  collectCoverage: true,

  // Output coverage files to the "coverage" directory
  coverageDirectory: "coverage",

  // Use the v8 coverage provider for better performance
  coverageProvider: "v8",

  // Use jsdom as the test environment (required for Next.js apps)
  testEnvironment: "jest-environment-jsdom",

  // Setup files to configure the testing environment
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Mock CSS modules and other static file imports
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },

  // Ignore node_modules and .next directory when running tests
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],

  // Transform files using babel-jest and Next.js babel preset
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
}

export default config
