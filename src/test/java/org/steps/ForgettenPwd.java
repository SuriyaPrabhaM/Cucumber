package org.steps;

import java.util.List;

import org.helper.BaseClass;
import org.locators.ForgettenPasswordPojo;
import org.openqa.selenium.WebElement;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ForgettenPwd extends BaseClass{
	
	@Given("User have to open Fb login page")
	public void user_have_to_open_Fb_login_page() {
		
		launchUrl("https://www.facebook.com/");
		maxWindow();
		applyImplicitWait();
	}

	@When("User have to click Forgetten password link")
	public void user_have_to_click_Forgetten_password_link() {
		ForgettenPasswordPojo f = new ForgettenPasswordPojo();
		WebElement frgtPwdLink = f.getFrgtPwd();
		toClickButton(frgtPwdLink);	
		
	}

	@When("To validate functionality using invalid mobile number and clich search button")
	public void to_validate_functionality_using_invalid_mobile_number_and_clich_search_button(DataTable d) {
		ForgettenPasswordPojo f = new ForgettenPasswordPojo();
		
		WebElement searchBox = f.getSearchBox();
		List<String> l1 = d.asList();
		String v1 = l1.get(7);
		fillTextBox(searchBox, v1);
		WebElement searchBtn = f.getSearchBtn();
		toClickButton(searchBtn);
	}

	@Then("User have to be in identify the account page")
	public void user_have_to_be_in_identify_the_account_page() {
		String fetchUrl = fetchUrl();
		if (fetchUrl.contains("recover")) {
			System.out.println("Recovery page");
		} else {
            System.out.println("Not in Recovery page");
		}
	}


}
