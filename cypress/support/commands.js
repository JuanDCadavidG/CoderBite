import { loginCoderbyte } from '../../support/pages/LoginCoderbyte'

const { SUT } = Cypress.env('endpoint');

Cypress.Commands.add('PageLogin', () => {

    cy.visit(SUT);
    loginCoderbyte.clickLoginForm();
    
})