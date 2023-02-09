import {expect, test} from '@playwright/test';
import HomePage from "./check24Pages/HomePage";
import RegistrationFrame from "./check24Pages/RegistrationFrame";

test('Create an account untill the confirmation code page',
    async ({page}) => {

        const homePage = new HomePage();
        const registrationFrame = new RegistrationFrame();

        await page.goto(homePage.pageURL);
        await page.locator(homePage.acceptCookies).nth(1).click();
        await page.hover(homePage.myAccount);
        await page.locator(registrationFrame.signIn).click();
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(registrationFrame.createAccountButton).click();
        const randomEmail = Math.floor(Math.random() * 1000000000) + '@dummyaddress.com';
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(registrationFrame.emailOrPhoneNumberInput).type(randomEmail);
        await page.keyboard.press('Enter');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(registrationFrame.firstNameInput).fill('alo');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(registrationFrame.lastNameInput).fill('aloalo');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(registrationFrame.passwordInput).fill('686115Hc.');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(registrationFrame.repeatedPassword).fill('686115Hc.');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(registrationFrame.submitButton).click();
        await expect(page.frameLocator('.c24-uli-loginlayer-iframe').locator(registrationFrame.changeEmailButton)).toBeVisible();
    });
