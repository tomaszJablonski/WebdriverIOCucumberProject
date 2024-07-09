const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^User is on login page$/, async () => {
    await browser.url('https://the-internet.herokuapp.com/login');
});

// When(/^User enter username and password$/, async () => {
//     await $('#username').setValue('tomsmith');
//     await $('#password').setValue('SuperSecretPassword!');
// });

When(/^User enter (.*) and (.*)$/, async (username,password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);

});


When(/^Clicks on login button$/, async () => {
    await $('.radius').click();
});

Then(/^Check logged in$/, async () => {
    await expect($('#flash')).toBeDisplayed();
});


Then(/^this (.*) is displayed$/, async (message) => {
    await expect($('#flash')).toHaveTextContaining(message)
});


