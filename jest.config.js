module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.tests.js'],
  collectCoverageFrom: ['src/**/*.js', '!src/tests/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
