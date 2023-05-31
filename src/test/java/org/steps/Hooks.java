package org.steps;

import java.io.IOException;

import org.helper.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {
	
	@Before
	public void beforesc() {
		openChromeBrowser();
	}
	
	@After
	public static void afterScenario(Scenario s) throws IOException {
		String scenarioName = s.getName();
		String secName = scenarioName.replace(" ", "_");
		screenShot(secName);  
		closeBrowser();
	}
	
	
//	public void aftersc(Scenario s) {
//		if (s.isFailed()) {
//			TakesScreenshot tk = (TakesScreenshot)driver;
//			byte[] failedImage = tk.getScreenshotAs(OutputType.BYTES);
//			s.embed(failedImage, "image/png");
//		}
		
		
	}


