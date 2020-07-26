module.exports = {
  collectCoverageFrom: [
    '<rootDir>/packages/server/**/*.ts',
    '<rootDir>/packages/client/**/*.ts',
    '<rootDir>/packages/mobile/**/*.ts',
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': "ts-jest",
  },
  moduleNameMapper: {
    "^@server/(.*)$": "<rootDir>/packages/server/$1",
    "^@client/(.*)$": "<rootDir>/packages/client/$1",
    "^@mobile/(.*)$": "<rootDir>/packages/mobile/$1",
  },
};
