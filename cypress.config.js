const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    video: true,
    screenshotsFolder: 'reports/screenshots',
    videosFolder: 'reports/videos',
    defaultCommandTimeout: 10000,
    viewportWidth: 1366,
    viewportHeight: 768
  }
});
