import {expect, test} from '@playwright/test';
import HomePage from "./check24Pages/HomePage";
import RegistrationFrame from "./check24Pages/RegistrationFrame";
import {UserTestData} from "../utils/UserTestData";

test('Create an account until the confirmation code page',
    async ({page}) => {

        const homePage = new HomePage();
        const registrationFrame = new RegistrationFrame();
        const testUser = new UserTestData();

        await page.goto(homePage.pageURL);
        await page.locator(homePage.acceptCookies).nth(1).click();
        await page.hover(homePage.myAccount);
        await page.locator(registrationFrame.signIn).click();
        await page.frameLocator(registrationFrame.registrationFrame).locator(registrationFrame.createAccountButton).click();
        await page.frameLocator(registrationFrame.registrationFrame).locator(registrationFrame.emailOrPhoneNumberInput).type(testUser.email);
        await page.keyboard.press('Enter');
        await page.frameLocator(registrationFrame.registrationFrame).locator(registrationFrame.firstNameInput).fill(testUser.firstName);
        await page.frameLocator(registrationFrame.registrationFrame).locator(registrationFrame.lastNameInput).fill(testUser.lastName);
        await page.frameLocator(registrationFrame.registrationFrame).locator(registrationFrame.passwordInput).fill(testUser.password);
        await page.frameLocator(registrationFrame.registrationFrame).locator(registrationFrame.repeatedPassword).fill(testUser.password);
        await page.frameLocator(registrationFrame.registrationFrame).locator(registrationFrame.submitButton).click();
        await expect(page.frameLocator(registrationFrame.registrationFrame).locator(registrationFrame.changeEmailButton)).toBeVisible();
    });
