// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'custom',
   // path relative to the current config file
  frameworkPath: 'C:/Users/SONY/AppData/Roaming/npm/node_modules/protractor-cucumber-framework',
   // relevant cucumber command line options
   cucumberOpts: {

     format: "summary"
   },
  // Spec patterns are relative to the current working directory when
  // protractor is called.
specs: ['./features/homepage.feature'],
  allScriptsTimeout: 50000, //This is the overall Timeout
  getPageTimeout: 50000, //This is the Page timeout
cucumberOpts: {
      // require step definitions
    require: [
        './features/step_definitions/homepage/stepsAWS.js' // accepts a glob
		
    ]
  }


};
