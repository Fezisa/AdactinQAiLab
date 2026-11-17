// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import LoginPO from '../e2e/PageObjects/loginPage';

Cypress.Commands.add('login', (username, password) => {
  cy.session(
    [username, password],           
    () => {
      const loginPO = new LoginPO();
      cy.visit('https://adactinhotelapp.com/index.php');
      loginPO.UsernameSelect(username);
      loginPO.PasswordSelect(password);
      loginPO.clickLogin();
      loginPO.verifyLoginSuccess();
    },
    {
    //   cacheAcrossSpecs: true,   
      validate() {
        // 
        cy.visit('https://adactinhotelapp.com/SearchHotel.php');
        cy.url().should('include', '/SearchHotel.php');
      },
    }
  );
});