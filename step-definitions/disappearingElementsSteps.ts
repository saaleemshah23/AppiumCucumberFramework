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

When('I wait for 5 seconds', async function () {
  await driver.pause(5000);
});

Then('I should see the "Disappear" element disappear', async function () {
  const disappearElement = await driver.$('~Disappear');
  const isDisplayed = await disappearElement.isDisplayed();
  if (isDisplayed) {
    throw new Error('Element still visible after wait');
  }
});
