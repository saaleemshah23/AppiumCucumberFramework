import { Given, When, Then } from 'cucumber';
import { remote, WebDriver, Element } from 'webdriverio';

let driver: WebDriver;
let usernameInput: Element;
let passwordInput: Element;
let loginButton: Element;

// Step definition to launch the app
Given('I launch the Appium Sample App', async function (): Promise<void> {
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

  console.log('App launched successfully!');
});

// Step definition to navigate to the login screen
Given('I navigate to the login screen', async function (): Promise<void> {
  // Assuming there's a way to navigate to the login screen
  const loginLink = await driver.$('~Login');
  await loginLink.click();
});

// Step definition to enter username
When('I enter {string} into the username field', async function (username: string): Promise<void> {
  usernameInput = await driver.$('~Username');
  await usernameInput.setValue(username);
});

// Step definition to enter password
When('I enter {string} into the password field', async function (password: string): Promise<void> {
  passwordInput = await driver.$('~Password');
  await passwordInput.setValue(password);
});

// Step definition to click the login button
When('I click the login button', async function (): Promise<void> {
  loginButton = await driver.$('~Login Button');
  await loginButton.click();
});

// Step definition to verify successful login
Then('I should see the login success message', async function (): Promise<void> {
  const successMessage = await driver.$('~Login Success');
  const isDisplayed = await successMessage.isDisplayed();
  if (!isDisplayed) {
    throw new Error('Login success message was not displayed');
  }
});

// Step definition to verify failed login
Then('I should see the login error message', async function (): Promise<void> {
  const errorMessage = await driver.$('~Login Error');
  const isDisplayed = await errorMessage.isDisplayed();
  if (!isDisplayed) {
    throw new Error('Login error message was not displayed');
  }
});
