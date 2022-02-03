module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/*.spec.ts']
}
