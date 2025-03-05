import { Given, When, Then } from 'cucumber';
import { remote, WebDriver } from 'webdriverio';

// Declare the driver variable with the correct type
let driver: WebDriver;

Given('I launch the Appium Sample App', async function (): Promise<void> {
  // Launch the Appium app
  driver = await remote({
    capabilities: {
      platformName: 'Android',
    }
  });
  console.log('App launched successfully!');
});

When('I perform a long press on "Context Menu" element', async function (): Promise<void> {
  const contextMenuElement = await driver.$('~Context Menu');
  await contextMenuElement.touchAction({
    action: 'longPress',
    element: contextMenuElement
  });
});

Then('I should see the context menu options', async function (): Promise<void> {
  const contextMenuOptions = await driver.$$('~Context Menu Option');
  if (contextMenuOptions.length === 0) {
    throw new Error('Context menu options not found');
  }
});
