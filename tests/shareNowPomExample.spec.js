const { test, expect } = require('@playwright/test');
const { PersonalDataPage } = require('./example2/pages/PersonalDataPage');
const { HomePage } = require('./example2/pages/HomePage');

test('first part of registration', async ({page}) => {
    const personalDataPage = new PersonalDataPage(page);
    const homePage = new HomePage(page);
    await homePage.goto();
});
