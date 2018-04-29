$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Sony/eclipse-workspace/CucumberSeleniumDemo/src/test/java/YahooTest/yahootest.feature");
formatter.feature({
  "line": 1,
  "name": "Yahoo application testing",
  "description": "",
  "id": "yahoo-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "yahoo login test",
  "description": "",
  "id": "yahoo-application-testing;yahoo-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens yahoo login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters loginid",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks next button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "yahootest_StepDefinition.user_open_yahoo_login_page()"
});
formatter.result({
  "duration": 5280136802,
  "status": "passed"
});
formatter.match({
  "location": "yahootest_StepDefinition.user_enters_loginid()"
});
formatter.result({
  "duration": 336022533,
  "status": "passed"
});
formatter.match({
  "location": "yahootest_StepDefinition.user_clicks_next_buttons()"
});
formatter.result({
  "duration": 101777688,
  "status": "passed"
});
formatter.match({
  "location": "yahootest_StepDefinition.user_closes_the_browser()"
});
formatter.result({
  "duration": 604415504,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "yahoo login title page",
  "description": "",
  "id": "yahoo-application-testing;yahoo-login-title-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user opens yahoo login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "get the title of yahoo login page and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "yahootest_StepDefinition.user_open_yahoo_login_page()"
});
formatter.result({
  "duration": 3321765069,
  "status": "passed"
});
formatter.match({
  "location": "yahootest_StepDefinition.get_the_title_of_yahoo_login_page_and_verify()"
});
formatter.result({
  "duration": 20426394,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cYahoo - login[123]\u003e but was:\u003cYahoo - login[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat YahooTest.yahootest_StepDefinition.get_the_title_of_yahoo_login_page_and_verify(yahootest_StepDefinition.java:53)\r\n\tat ✽.Then get the title of yahoo login page and verify(C:/Users/Sony/eclipse-workspace/CucumberSeleniumDemo/src/test/java/YahooTest/yahootest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "yahootest_StepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});