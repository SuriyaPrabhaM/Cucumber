package org.run.all;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@FailedScenarios\\Failed.txt" , glue = "org.steps",
plugin = {"rerun:FailedScenarios\\Failed.txt"})

public class ReRunnerClass {

}
