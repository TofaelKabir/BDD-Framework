@many
Feature: Multiple login feature
Scenario Outline: Multiple login feature test

Given user is in the signin page
Then user enters "<username>" and "<password">

Examples:
|username|password|
|kashem1956@gmail.com|Kashem5000|
|nafasatzayan@gmail.com|sohag123|