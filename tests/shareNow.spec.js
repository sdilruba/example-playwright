import {test, expect} from '@playwright/test';
import PersonalDataPage from '../tests/pages/PersonalDataPage'; // your Path of the page object class
import HomePage from "./pages/HomePage";

test('registration without payment', async ({page}) => {

    const personalDataPage = new PersonalDataPage();
    const homePage = new HomePage();

    await page.goto(homePage.pageURL);

    await page.locator(homePage.acceptCookies).click();

    await page.locator(homePage.signUpButton).click();

    await page.selectOption(personalDataPage.drivingLocation, 'berlin');

    await page.waitForURL(personalDataPage.pageURL);

    await page.locator(personalDataPage.emailInput).waitFor();

    const randomEmail = Math.floor(Math.random() * 1000000000) + '@dummyaddress.com';
    await page.locator(personalDataPage.emailInput).fill(randomEmail);

    await page.fill(personalDataPage.passwordInput, '12365');

    await page.locator(personalDataPage.pinInput).fill('4567');

    await page.locator(personalDataPage.salutationInput).selectOption({label: 'Mrs.'});

    await page.locator(personalDataPage.firstNameInput).type('Dilruba');

    await page.locator(personalDataPage.lastNameInput).type('Sarican');

    await page.selectOption(personalDataPage.birthDayInput, '9');

    await page.locator(personalDataPage.birthMonthInput).selectOption({label: 'November'});

    await page.selectOption(personalDataPage.birthYearInput, '1997');

    await page.locator(personalDataPage.birthPlaceInput).type('Berlin');

    await page.locator(personalDataPage.addressStreetInput).type('Baumschulenstraße 45');

    await page.locator(personalDataPage.addressZipcodeInput).type('12437');

    await page.locator(personalDataPage.addressCityInput).type('Berlin');

    const randomPhoneNumber = Math.floor(100000000 + Math.random() * 9000000000).toString();
    await page.locator(personalDataPage.mobilePhoneInput).type(randomPhoneNumber);

    const termsAndConditions = await page.locator(personalDataPage.registrationCheckboxes).nth(0);
    await termsAndConditions.click({force: true});

    await page.locator(personalDataPage.registrationButton).click();

    await expect(page).toHaveURL(/payment/);
});
