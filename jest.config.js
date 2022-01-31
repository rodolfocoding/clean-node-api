module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
