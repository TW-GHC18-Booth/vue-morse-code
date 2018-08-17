const moduleNameMapper = require('./aliases.config').jest;


module.exports = {
  setupFiles: ['<rootDir>/tests/setup'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/matchers',
  testMatch: ['<rootDir>/src/**/(*.)unit.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper,
  transformIgnorePatterns: [
    'node_modules/(?!bv-login-view)'
  ],
  snapshotSerializers: ['jest-serializer-vue']
};