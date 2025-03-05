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

When('I select the "Option 1" from the dropdown', async function () {
  const dropdown = await driver.$('~Dropdown');
  await dropdown.click();
  const option1 = await driver.$('~Option 1');
  await option1.click();
});

Then('I should see the "Option 1" selected', async function () {
  const selectedOption = await driver.$('~DropdownSelectedOption');
  const selectedText = await selectedOption.getText();
  if (selectedText !== 'Option 1') {
    throw new Error('Option 1 was not selected');
  }
});
