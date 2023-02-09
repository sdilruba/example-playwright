class HomePage {

    pageURL = 'https://www.check24.de/';
    acceptCookies ='.c24-cookie-consent-button';
    searchButton = '.c24-search-button';
    searchField = 'input#c24-search-header';

    //Nav-bar
    myAccount = '.c24-customer-hover-wrapper';

    //My Account Pop-Up Screen
    signIn = '#c24-meinkonto-anmelden';
    createAccountButton = 'a.c24-uli-cl-r-start-trigger';
    emailOrPhoneNumberInput = '#cl_login';
    continueButton = 'button.c24-uli-button#c24-uli-login-btn';

    //Register screen
    firstNameInput = '#cl_ul_firstname';
    lastNameInput = '#cl_ul_lastname';
    passwordInput = '#cl_pw_register';
    repeatedPassword = '#cl_ul_pw_register_repeat';
    submitButton = '#c24-uli-register-btn';

    //Registration Confirmation Screen
    changeEmailButton = '.c24-uli-user-change';

}

export default HomePage;
