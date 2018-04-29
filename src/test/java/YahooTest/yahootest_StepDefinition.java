package YahooTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class yahootest_StepDefinition {
	
	WebDriver driver = null;
	@Given("^user opens yahoo login page$")
	public void user_open_yahoo_login_page() {
		driver = new ChromeDriver();
		driver.get("https://login.yahoo.com");
	}
	
	@Then("^user enters loginid$")
	public void user_enters_loginid() {
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys("trunghuynh");
		
	}
	
	@And("^user clicks next button$")
	public void user_clicks_next_buttons() {
		driver.findElement(By.xpath("//input[@id='login-signin']")).click();
	}
	
//	@Then("^user enters password$")
//	public void user_enters_password() {
//		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("password_test");
//		
//	}
//	
//	@And("^user clicks on signin button$")
//	public void user_clicks_on_signin_button() {
//		driver.findElement(By.xpath("//button[@id='login-signin']")).click();
//	}
//	
	@And("^user closes the browser$")
	public void user_closes_the_browser() {
		driver.quit();
	}
	
	
	@Then("^get the title of yahoo login page and verify$")
	public void get_the_title_of_yahoo_login_page_and_verify() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Yahoo - login123",title);
		
	}
}
