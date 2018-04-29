Feature: Yahoo application testing

Scenario: yahoo login test

Given user opens yahoo login page
Then user enters loginid
And user clicks next button
And user closes the browser

Scenario: yahoo login title page
Given user opens yahoo login page
Then get the title of yahoo login page and verify
And user closes the browser