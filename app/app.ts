import application = require("application");

global.myVariable = 'firstTime';

application.start({ moduleName: "main-page" });
