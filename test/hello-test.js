const alexaTest = require('alexa-skill-test-framework');

alexaTest.initialize(
   require('../lambda/custom/index.js'),
   "amznl.ask.skill.00000000-0000-0000-0000-000000000000",
   "amznl.ask.account.VOID"
);

describe("Star Port 75 Travel - Hello Test", function() {
   describe("LaunchRequest", function () { alexaTest.test([
      {
      request: alexaTest.getLaunchRequest(),
      says: "Welcome to Star Port 75 Travel. How can I help you?", shouldEndSession: false
      } ]);
      });
   describe("HelloWorldIntent", function () { alexaTest.test([
      {
      request: alexaTest.getIntentRequest("HelloWorldIntent"), says: "Have a stellar day!",
      shouldEndSession: true
      } 
   ]);
   });
 });