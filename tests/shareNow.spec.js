import {test, expect } from '@playwright/test';

test('registration without payment', async ({ page }) => {

    //open https://www.share-now.com/de/en/
    await page.goto('https://www.share-now.com/de/en/');

    // click to register now
    await page.locator('.primary-navbar__actions #reggie-link-register-now').click();

    //select Berlin
    await page.selectOption('select[name=drivingLocation]', 'berlin');

    //type random email
    await page.locator('input[name=email]').type(Math.floor(Math.random() * 1000000000) + '@dummyaddress.com');

    //type password (must be between 5-25 characters)
    await page.locator('input[name=password]').type('12345');

    //type pin
    await page.locator('input[name=pin]').type('1234');

    //select title "Mrs"
    await page.locator('select[name=salutation]').selectOption({label: 'Mrs.'});

    //type firstName
    await page.locator('input[name=firstName]').type('Dilruba');

    //type firstName
    await page.locator('input[name=lastName]').type('Sarican');

    //select birth-day
    await page.selectOption('#camelot-select-birth-date-day', '9');

    //select birth-month
    await page.locator('#camelot-select-birth-date-month').selectOption({label: 'November'});

    //select birth-year
    await page.selectOption('#camelot-select-birth-date-year', '1997');

    //type birth location
    await page.locator('input[name=birthPlace]').type('Berlin');

    //type street and no
    await page.locator('input[name=addressStreet]').type('Baumschulenstraße 45');

    //type zip code
    await page.locator('input[name=addressZipCode]').type('12437');

    //type city
    await page.locator('input[name=addressCity]').type('Berlin');

    //type random phone number
 //   await page.locator('input[name=mobilePhone]').type(Math.floor(100000000 + Math.random() * 900000000));

    //create a locator of first checkbox (all three checboxes: input[type=checkbox])
 //   const checkBoxOne = await page.locator('.checkbox [type=checkbox]');
//    await checkBoxOne.check();

    //check the second checkbox
    await page.locator('#camelot-checkbox-60232').click();

    //check the state of the first checkbox
    expect(await checkBoxOne.isChecked()).toBeTruthy();

    //click on register now
    await page.locator('#registration-save-button').click();

    //verify that you are in the payment page
    await expect(page).toHaveURL('https://www.share-now.com/de/en/berlin/registration/payment/');


});