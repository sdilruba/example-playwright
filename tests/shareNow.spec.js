import {test} from '@playwright/test';


test('registration without payment', async ({page}) => {

        //open https://www.share-now.com/de/en/
        await page.goto('https://www.share-now.com/de/en/');

        // click to register now
        await page.locator('.primary-navbar__actions #reggie-link-register-now').click();

        //select Berlin
        await page.selectOption('select[name=drivingLocation]', 'berlin');

        // to debug easier
        await new Promise(r => setTimeout(r, 2000));

        //type random email
        await page.locator('input[name=email]').fill(Math.floor(Math.random() * 1000000000) + '@dummyaddress.com');

        //type password (must be between 5-25 characters)
        await page.fill('input[name=password]','12365');

        //type pin
        await page.locator('input[name=pin]').fill('4567');

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
        await page.locator('input[name=mobilePhone]').type(Math.floor(100000000 + Math.random() * 900000000).toString());

        //check the first checkbox
        await page.locator('.checkbox [type=checkbox]').nth(0).click();

        // to debug easier
        await new Promise(r => setTimeout(r, 5000));


    /*
        click on register now
        wait page.locator('#registration-save-button').click();

        verify that you are in the payment page
        await page.waitForURL('https://www.share-now.com/de/en/berlin/registration/payment/');
    */


    });
