module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx}',
  ],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/config/jest/jest-transformer.js',
  },
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
}
