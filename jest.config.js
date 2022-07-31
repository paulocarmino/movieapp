module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/pages/**/*.tsx',
    '!src/**/stories.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/index.tsx'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/utils'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '~/(.*)': '<rootDir>/$1'
  }
}
