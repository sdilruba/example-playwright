const {expect} = require('@playwright/test');

exports.PersonalDataPage = class PersonalDataPage {

    constructor(page) {
        this.page = page;
        this.drivingLocation = page.locator(`select[name=drivingLocation]`);
        this.emailInput = page.locator(`input[name=email]`);
        this.passwordInput = page.locator('input[name=password]');
        this.pinInput = page.locator('input[name=pin]');
        this.salutationInput = page.locator('select[name=salutation]');
        this.firstNameInput = page.locator('input[name=firstName]');
        this.lastNameInput = page.locator('input[name=lastName]');
        this.birthDayInput = page.locator('#camelot-select-birth-date-day');
        this.birthMonthInput = page.locator('#camelot-select-birth-date-month');
        this.birthYearInput = page.locator('#camelot-select-birth-date-year');
        this.birthPlaceInput = page.locator('input[name=birthPlace]');
        this.addressStreetInput = page.locator('input[name=addressStreet]');
        this.addressZipcodeInput = page.locator('input[name=addressZipCode]');
        this.addressCityInput = page.locator('input[name=addressCity]');
        this.mobilePhoneInput = page.locator('input[name=mobilePhone]');
        this.registrationCheckboxes = page.locator('.checkbox [type=checkbox]');
        this.registrationButton = page.locator('#registration-save-button');
    }
}
