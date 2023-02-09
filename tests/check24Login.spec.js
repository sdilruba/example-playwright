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

    //    await new Promise(r => setTimeout(r, 5000));

        const randomEmail = Math.floor(Math.random() * 1000000000) + '@dummyaddress.com';
        await page.locator(homePage.emailOrPhoneNumberInput).type(randomEmail);

        await new Promise(r => setTimeout(r, 5000));
        // await page.keyboard.press('Enter');

        await page.locator(homePage.continueButton).click();

        await new Promise(r => setTimeout(r, 5000));

        await page.locator(homePage.firstNameInput).fill('alo');

        await new Promise(r => setTimeout(r, 5000));

        await page.locator(homePage.lastNameInput).fill('aloalo');

        await new Promise(r => setTimeout(r, 5000));

        await page.locator(homePage.passwordInput).fill('686115Hc.');

        await new Promise(r => setTimeout(r, 5000));

        await page.locator(homePage.repeatedPassword).fill('686115Hc.');

        await new Promise(r => setTimeout(r, 5000));

        await page.locator(homePage.submitButton).click();

    });
