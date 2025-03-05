const { Given, When, Then } = require('cucumber');
const { remote } = require('webdriverio');
let driver;

Given('I launch the Appium Sample App', async function () {
  driver = await remote({
    capabilities: {
      platformName: 'Android',
      deviceName: 'Samsung Galaxy S10',
      appPackage: 'io.appium.android.apis',
      appActivity: 'io.appium.android.apis.ApiDemos',
      automationName: 'UiAutomator2',
      appiumVersion: '1.22.0',
      app: 'sauce-storage:AppiumSampleApp.apk',
    }
  });
});

When('I wait for dynamic content to load', async function () {
  const dynamicContentElement = await driver.$('~DynamicContent');
  await dynamicContentElement.waitForDisplayed({ timeout: 10000 });
});

Then('I should see the dynamic content displayed', async function () {
  const dynamicContent = await driver.$('~DynamicContent');
  const isDisplayed = await dynamicContent.isDisplayed();
  if (!isDisplayed) {
    throw new Error('Dynamic content was not displayed');
  }
});
