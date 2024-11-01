const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const mocha = require('mocha');

      // Hier stel je de reporter in
      on('after:run', (results) => {
        trashAssetsBeforeRuns: true,  // Voeg deze optie toe// Hier kun je een aangepaste actie toevoegen, als dat nodig is
        console.log('Testresultaten:', results);
      });

      // JUnit reporter toevoegen
      on('task', {
        'mocha-junit-reporter': (results) => {
          const reporter = require('mocha-junit-reporter');
          reporter(results);
        }
      });
    },
  },
});
