package org.locators;

import org.helper.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class ForgettenPasswordPojo extends BaseClass {
	 public ForgettenPasswordPojo() {
		 PageFactory.initElements(driver, this);
	}
	 
	 @FindBys({
		 
	 @FindBy(xpath = "//a[contains(text(),'password')]"),
	 @FindBy(xpath = "//a[text()='Forgotten password?']")})
	 private WebElement frgtPwd;
	 
	 @FindAll({
		 @FindBy(xpath = "//input[@type='text']"),
		 @FindBy(id="identify_email")
	 })
	 private WebElement searchBox;
	 
	 @FindBy(xpath = "//button[@type='submit']")
	 private WebElement searchBtn;

	public WebElement getFrgtPwd() {
		return frgtPwd;
	}

	public WebElement getSearchBox() {
		return searchBox;
	}

	public WebElement getSearchBtn() {
		return searchBtn;
	}
	 

}
