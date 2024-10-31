const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-junit")({
        // Configureer de JUnit reporter
        mochaFile: "results/junit-[hash].xml", // Pas dit aan naar de gewenste outputlocatie
      })(on);
    },
  },
});
