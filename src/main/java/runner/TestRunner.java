package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)

@CucumberOptions(

        features = {"/Users/mohammadsharkar/Desktop/naveen/amazonBDD/src/main/java/feature"},

        glue={"stepDefinitions"},

        format = {"pretty","json:report/cucumber.json","html:report/cucumber-pretty"},

        strict = false,

        monochrome = true,

        tags = {"@many"},

        dryRun = false)

 public class TestRunner{

}
