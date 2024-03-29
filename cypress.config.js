const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cd5k8a',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
