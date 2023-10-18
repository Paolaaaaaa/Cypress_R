const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'Registration-example',
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
