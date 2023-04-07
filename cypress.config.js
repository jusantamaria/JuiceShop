const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://juice-shop.herokuapp.com/#/",
    specPattern: "cypress/e2e/JuiceShop/Login.spec.js",
    setupNodeEvents(on, config){
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
    
    chromeWebSecurity: false,
});