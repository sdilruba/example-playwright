const {expect} = require('@playwright/test');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.acceptCookies = page.locator('[data-testid=uc-accept-all-button]');
        this.signUpButton = page.locator('.primary-navbar__actions #reggie-link-register-now');
    }

    async goto() {
        await this.page.goto('https://www.share-now.com/de/en/');
    }
}
