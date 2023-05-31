package org.run.all;

import org.helper.jvmReportGeneration;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\FeatureFiles", glue ="org.steps", 
dryRun = false, monochrome = true, strict = false, tags = {"@Login or @Forgot"}, 
 plugin = {"pretty",
		"html:Reporting\\htmlReport",
		"json:Reporting\\jsonReport\\fb.json",
		"junit:Reporting\\junitReport\\facebook.xml",
		"rerun:FailedScenarios\\Failed.txt"
		} )

public class RunnerClass {
	@AfterClass
	public static void allScenario() {
		jvmReportGeneration.bddreportgeneration("Reporting\\jsonReport\\fb.json");
	}

}

