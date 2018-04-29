package YahooTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "C:\\Users\\Sony\\eclipse-workspace\\CucumberSeleniumDemo\\src\\test\\java\\YahooTest\\yahootest.feature", format = {"pretty", "html:C:\\Users\\Sony\\eclipse-workspace\\CucumberSeleniumDemo\\reports"})
public class YahooTestRunner {
	
}
