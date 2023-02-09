import {expect, test} from '@playwright/test';
import HomePage from "./check24Pages/HomePage";

test('Create an account untill the confirmation code page',
    async ({page}) => {

        const homePage = new HomePage();

        await page.goto(homePage.pageURL);
        await page.locator(homePage.acceptCookies).nth(1).click();
        await page.hover(homePage.myAccount);
        await page.locator(homePage.signIn).click();
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(homePage.createAccountButton).click();
        const randomEmail = Math.floor(Math.random() * 1000000000) + '@dummyaddress.com';
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(homePage.emailOrPhoneNumberInput).type(randomEmail);
        await page.keyboard.press('Enter');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(homePage.firstNameInput).fill('alo');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(homePage.lastNameInput).fill('aloalo');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(homePage.passwordInput).fill('686115Hc.');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(homePage.repeatedPassword).fill('686115Hc.');
        await page.frameLocator('.c24-uli-loginlayer-iframe').locator(homePage.submitButton).click();
        await expect(page.frameLocator('.c24-uli-loginlayer-iframe').locator(homePage.changeEmailButton)).toBeVisible();
    });