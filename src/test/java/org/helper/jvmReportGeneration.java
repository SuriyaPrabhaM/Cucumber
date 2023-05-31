package org.helper;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class jvmReportGeneration {
public static void bddreportgeneration(String jsonpath) {
	File f = new File("C:\\Users\\LENOVO\\eclipse-workspace\\CucumberProject\\Reporting\\jvmReport");
	Configuration c = new Configuration(f, "HellowWorld");
	c.addClassifications("Automation Tool", "SeleniumWebdriver");
	c.addClassifications("IDE", "Eclipse");
	c.addClassifications("Version", "photon r");
	c.addClassifications("Sprint", "500");

	List<String> li = new ArrayList<String>();
	li.add(jsonpath);
	
	ReportBuilder r= new ReportBuilder(li, c);
	r.generateReports();
	
}
}
