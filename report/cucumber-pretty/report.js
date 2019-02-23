$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MultipleLogIn.feature");
formatter.feature({
  "line": 2,
  "name": "Multiple login feature",
  "description": "",
  "id": "multiple-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@many"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Multiple login feature test",
  "description": "",
  "id": "multiple-login-feature;multiple-login-feature-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in the signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\"\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "multiple-login-feature;multiple-login-feature-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "multiple-login-feature;multiple-login-feature-test;;1"
    },
    {
      "cells": [
        "kashem1956@gmail.com",
        "Kashem5000"
      ],
      "line": 10,
      "id": "multiple-login-feature;multiple-login-feature-test;;2"
    },
    {
      "cells": [
        "nafasatzayan@gmail.com",
        "sohag123"
      ],
      "line": 11,
      "id": "multiple-login-feature;multiple-login-feature-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7130505379,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Multiple login feature test",
  "description": "",
  "id": "multiple-login-feature;multiple-login-feature-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@many"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is in the signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"kashem1956@gmail.com\" and \"\u003cpassword\"\u003e",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MultipleLogInSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 4285388464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kashem1956@gmail.com",
      "offset": 13
    },
    {
      "val": "\u003cpassword",
      "offset": 40
    }
  ],
  "location": "MultipleLogInSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1924794796,
  "status": "passed"
});
formatter.after({
  "duration": 217764797,
  "status": "passed"
});
formatter.before({
  "duration": 4631175250,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Multiple login feature test",
  "description": "",
  "id": "multiple-login-feature;multiple-login-feature-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@many"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is in the signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"nafasatzayan@gmail.com\" and \"\u003cpassword\"\u003e",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MultipleLogInSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 3469589728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nafasatzayan@gmail.com",
      "offset": 13
    },
    {
      "val": "\u003cpassword",
      "offset": 42
    }
  ],
  "location": "MultipleLogInSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1479796718,
  "status": "passed"
});
formatter.after({
  "duration": 173518432,
  "status": "passed"
});
});