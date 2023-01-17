import {test, expect } from '@playwright/test';


test('registration without payment',
    async ({page}) => {

        //open https://www.share-now.com/de/en/
        await page.goto('https://www.share-now.com/de/en/');

        // click to register now
        await page.locator('.primary-navbar__actions #reggie-link-register-now').click();

        //select Berlin
        await page.selectOption('select[name=drivingLocation]', 'berlin');

        await new Promise(r => setTimeout(r, 2000));
      //  await page.toLoad();
      //  await expect(page).toHaveURL('https://www.share-now.com/de/en/berlin/registration/personal-data/');
      //  await page.waitForURL('https://www.share-now.com/de/en/berlin/registration/personal-data/');
      //  await page.locator('input[name=email]').isEditable();

        //type random email
        // await page.locator('input[name=email]').click();
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
   /*
        let num = Math.floor(100000000 + Math.random() * 900000000);
        let text = num.toString();
    */
            await page.locator('input[name=mobilePhone]').type(Math.floor(100000000 + Math.random() * 900000000).toString());




        //create a locator of first checkbox (all three checkboxes: input[type=checkbox])
     //    const checkBoxOne = await page.locator('.checkbox [type=checkbox]');
      //  checkBoxOne.first(checkBoxOne) |> checkBoxOne.click();
       // const checkBoxes = [];
      //  checkBoxes.push(page.locator('.checkbox [type=checkbox]'));
        // checkBoxes.forEach(page.locator('.checkbox [type=checkbox]'));
        //   await checkBoxOne.check();


     //   checkBoxes[0].click();
     //       await page.$('.checkbox [type=checkbox]', strict=false).click();

        //check the second checkbox
    //      await page.locator('//input[@type="checkbox"][1]').click();

        //check the state of the first checkbox
        //  expect(await checkBoxOne.isChecked()).toBeTruthy();

    //    await page.getByText('I accept the terms and conditions of SHARE NOW GmbH.').click();

            //click on the third checkbox
     //      await page.locator('label').filter({ hasText: 'Yes, I want to get SHARE NOW offers on social media and other online networks th' }).click();

   // the parent element from checkboxes (when clicked, this takes you to the terms and conditions page): .camelot-checkbox
   // the selector of all 3 checkboxes: .checkbox (is not clickable gives <label for="camelot-checkbox-48564">…</label> intercepts pointer events) [type=checkbox]
            await page.locator('.camelot-checkbox').nth(0).click();

        // locator.isChecked();

        //click on register now
        await page.locator('#registration-save-button').click();

        //verify that you are in the payment page
            await page.waitForURL('https://www.share-now.com/de/en/berlin/registration/payment/');
   //     await expect(page).toHaveURL('https://www.share-now.com/de/en/berlin/registration/payment/');



    });