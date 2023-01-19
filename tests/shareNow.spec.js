import {test, expect} from '@playwright/test';
import PersonalDataPage from '../tests/pages/PersonalDataPage'; // your Path of the page object class

test('registration without payment', async ({page}) => {

    const personalDataPage = new PersonalDataPage();

    await page.goto('https://www.share-now.com/de/en/');

    await page.locator('[data-testid=uc-accept-all-button]').click();

    await page.locator('.primary-navbar__actions #reggie-link-register-now').click();

    await page.selectOption(personalDataPage.drivingLocation, 'berlin');

    await page.waitForURL('https://www.share-now.com/de/en/berlin/registration/personal-data/');

    await page.locator('input[name=email]').waitFor();

    const randomEmail = Math.floor(Math.random() * 1000000000) + '@dummyaddress.com';
    await page.locator(personalDataPage.emailInput).fill(randomEmail);

    await page.fill('input[name=password]', '12365');

    await page.locator('input[name=pin]').fill('4567');

    await page.locator('select[name=salutation]').selectOption({label: 'Mrs.'});

    await page.locator('input[name=firstName]').type('Dilruba');

    await page.locator('input[name=lastName]').type('Sarican');

    await page.selectOption('#camelot-select-birth-date-day', '9');

    await page.locator('#camelot-select-birth-date-month').selectOption({label: 'November'});

    await page.selectOption('#camelot-select-birth-date-year', '1997');

    await page.locator('input[name=birthPlace]').type('Berlin');

    await page.locator('input[name=addressStreet]').type('Baumschulenstraße 45');

    await page.locator('input[name=addressZipCode]').type('12437');

    await page.locator('input[name=addressCity]').type('Berlin');

    const randomPhoneNumber = Math.floor(100000000 + Math.random() * 9000000000).toString();
    await page.locator('input[name=mobilePhone]').type(randomPhoneNumber);

    const termsAndConditions = await page.locator('.checkbox [type=checkbox]').nth(0);
    await termsAndConditions.click({force: true});

    await page.locator('#registration-save-button').click();

    await expect(page).toHaveURL(/payment/);
});
