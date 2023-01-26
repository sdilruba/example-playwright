const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../tests/pages/playwright-dev-page');

test('first part of registration', async ({page}) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
});
