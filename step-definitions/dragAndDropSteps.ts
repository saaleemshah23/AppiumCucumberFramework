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

When('I drag the "Draggable" element to the "Target" area', async function () {
  const draggableElement = await driver.$('~Draggable');
  const targetElement = await driver.$('~Target');
  await draggableElement.dragAndDrop(targetElement);
});

Then('I should see the "Target" area containing the "Draggable" element', async function () {
  const targetElement = await driver.$('~Target');
  const targetText = await targetElement.getText();
  if (!targetText.includes('Draggable')) {
    throw new Error('The draggable element was not dropped into the target area');
  }
});
