import {expect, test} from '@playwright/test';

test('playstation5goToPDP', async ({page}) => {

    await page.goto('https://www.check24.de/');
    await page.locator('.c24-cookie-consent-button').nth(1).click();
    await page.locator('input#c24-search-header').type('ps5');
    await page.keyboard.press('Enter');
    await page.locator('.category-select-button:first-child').click();
    await page.locator('.check-box-option__box').nth(2).click();
    await page.locator('.result-item-tile').nth(0).click();
    await expect(page).toHaveURL(/sony-playstation/);

});
