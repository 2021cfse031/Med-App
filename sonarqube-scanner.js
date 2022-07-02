const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://localhost:9000",
  login:"admin",
  password:"",
  options: {
    "sonar.sources": "./src",
    "sonar.projectKey": "MedApp",
    "sonar.login":"94cc5db366891189cc81e6e4e52b6c2472695b4f",
    "sonar.exclusions": "**/*.test.js",
    "sonar.tests": "./src",
    "sonar.test.inclusions": "App.test.js",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml"
  },
},
() => process.exit()
);