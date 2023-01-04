import {test, expect } from '@playwright/test';

test('Search user on Github', async ({ page }) => {

    //npx playwright test my-first-test.spec.js

    //open https://github.com/
    await page.goto('https://github.com/');

    // create a locator of search bar
    const searchField = await page.locator('input[data-test-selector=nav-search-input]');

    // type "jose-luis-nunez" in the search bar
    await searchField.type('jose-luis-nunez');

    // click enter
    await searchField.press('Enter');

    // click on users
    await page.locator('.menu-item [data-search-type=Users]').click();

    // click on Jose-Luis-Nunez
    await page.locator('a[data-hovercard-type="user"]').click();

    // assert follow button is visible
    const followLocator = await page.locator('.follow .btn-block');
    await expect(followLocator).toBeVisible();


});