import { loginCoderbyte } from '../../support/pages/LoginCoderbyte'

Cypress.Commands.add('LoginPage', () => {

    cy.visit('/');
    loginCoderbyte.clickLoginForm();
    
})