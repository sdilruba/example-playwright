import {expect, test} from '@playwright/test';
import HomePage from "./check24Pages/HomePage";
import ListingPage from "./check24Pages/ListingPage";

test('playstation5goToPDP', async ({page}) => {

    const homePage = new HomePage();
    const listingPage = new ListingPage();

    await page.goto(homePage.pageURL);
    await page.locator(homePage.acceptCookies).nth(1).click();
    await page.locator(homePage.searchField).type('ps5');
    await page.locator(homePage.searchButton).click();
    await page.locator(listingPage.firstCategory).click();
    await page.locator(listingPage.checkBoxFilters).nth(2).click();
    await page.locator(listingPage.listingTiles).nth(0).click();
    await expect(page).toHaveURL(/sony-playstation/);

});
