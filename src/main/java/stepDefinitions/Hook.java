package stepDefinitions;

import base.CommonAPI;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hook extends CommonAPI {

    @Before
    public void initializeTest() {

        System.setProperty("webdriver.chrome.driver", "/Users/mohammadsharkar/Desktop/naveen/amazonBDD/browserDriver/chromedriver");
        driver = new ChromeDriver();
        driver.navigate().to("https://www.amazon.com/");
        driver.manage().window().fullscreen();
    }

    @After
    public void tearDownTest(Scenario scenario) {
        driver.quit();
    }
}

