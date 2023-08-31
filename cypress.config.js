const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      on('file:preprocessor', cucumber())

      const version = config.env.version;

      config.baseUrl = config.env[version].baseUrl;
      config.env.firstName = config.env[version].firstName;
      config.env.lastName = config.env[version].lastName;
      config.env.email = config.env[version].email;

      return config
    },

    specPattern: "**/*.feature",
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false
  },
})
