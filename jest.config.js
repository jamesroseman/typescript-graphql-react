module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node',
  ],
  modulePathIgnorePatterns: [
    'build/',
    'src/app/',
    'src/.*/__tests__/constants/.*.ts'
  ],
  testRegex: 'src/.*/__tests__/.*.ts',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
  ],
};