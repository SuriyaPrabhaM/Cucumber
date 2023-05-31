package org.steps;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.helper.BaseClass;
import org.locators.LoginPojo;
import org.openqa.selenium.WebElement;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends BaseClass {

	LoginPojo l;

	@Given("user have to be in fb login page")
	public void user_have_to_be_in_fb_login_page() {

		launchUrl("https://www.facebook.com/");
		applyImplicitWait();
	}

	@When("user have to enter {string} and  {string}")
	public void user_have_to_enter_and(String v1, String v2) {
		l = new LoginPojo();
		WebElement emailId = l.getEmailId();
		fillTextBox(emailId, v1);

		WebElement password = l.getPassword();
		fillTextBox(password, v2);

	}

	@When("user have to enter  valid email and invalid password")
	public void user_have_to_enter_valid_email_and_invalid_password(DataTable d) {
		l = new LoginPojo();
		
		List<List<String>> l2 = d.asLists();
		List<String> l21 = l2.get(2);
		String email = l21.get(2);
		
		WebElement emailId = l.getEmailId();
		fillTextBox(emailId, email);
		
		List<List<String>> l3 = d.asLists();
		List<String> l31 = l3.get(1);
		String pass = l31.get(1);
		
		WebElement password = l.getPassword();
		fillTextBox(password, pass);

	}

	@When("user have to enter  invalid email and invalid password")
	public void user_have_to_enter_invalid_email_and_invalid_password(DataTable d) {
		l = new LoginPojo();
		
		Map<String, String> asMap = d.asMap(String.class, String.class);
		String v1 = asMap.get("PhoneNumber");
		String v2 = asMap.get("UserName");
		
		WebElement emailId = l.getEmailId();
		fillTextBox(emailId, v1);
		
		WebElement password = l.getPassword();
		fillTextBox(password, v2);
		
	}

	@When("user have to enter  invalid email and valid password")
	public void user_have_to_enter_invalid_email_and_valid_password(DataTable d) {
		l = new LoginPojo();
		
		List<Map<String,String>> asMaps = d.asMaps();
		
		Map<String, String> map = asMaps.get(10);
		String v1 = map.get("Email");
		
		Map<String, String> map2 = asMaps.get(1);
		String v2 = map2.get("Password");
		
		//String v2 = asMaps.get(1).get("Password");
		
		WebElement emailId = l.getEmailId();
		fillTextBox(emailId, v1);
		
		WebElement password = l.getPassword();
		fillTextBox(password, v2);
		
		
	}

	@Given("user have to maximize window")
	public void user_have_to_maximize_window() {
		maxWindow();
	}

	@When("user have to click the login button")
	public void user_have_to_click_the_login_button() throws InterruptedException {
		l = new LoginPojo();
		WebElement loginBtn = l.getLoginBtn();
		toClickButton(loginBtn);

	}

	@Then("user have to be in password invaild page")
	public void user_have_to_be_in_password_invaild_page() {
		String url = fetchUrl();
		if (url.contains("privacy_mutation_token")) {
			System.out.println("Password Invaild page");
		} else {
			System.out.println("Password not Invaild page");
		}
	}

}
