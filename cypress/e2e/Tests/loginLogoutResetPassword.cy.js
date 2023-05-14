import { loginCoderbyte } from '../../support/pages/LoginCoderbyte'

const { SUT } = Cypress.env('endpoint')

describe('GX-16572 | Coderbyte | LOGIN | Login, Logout and Reset Password', function () {
    
    beforeEach('User is on login page', () => {

        cy.once("fail", (err) => {
            return false;
        });
        cy.visit(SUT)
        loginCoderbyte.clickLoginForm()
        cy.fixture('loginCoderbyte').then(fxt => {
			this.fxt = fxt
        });
      
    })
    
    it('16573 | TC1: Validate can login successfully', () => {
        
		loginCoderbyte.writeUsername(this.fxt.username.valid);
		loginCoderbyte.writePassword(this.fxt.password.valid);
		loginCoderbyte.clickLoginButton();

        cy.url().should('contain', this.fxt.login);
        
    })
    
    it('16573 | TC2: Validate can’t login due to incorrect data', () => {

		loginCoderbyte.writeUsername(this.fxt.username.invalid);
		loginCoderbyte.writePassword(this.fxt.password.invalid);
        loginCoderbyte.clickLoginButton()
        
        cy.contains(this.fxt.incorrectMessageLogin).should('be.visible');
        
	})

    it('16573 | TC3: Validate can reset password successfully', () => {

        loginCoderbyte.clickForgotPassword();
        
        cy.url().should('contain', this.fxt.forgotPassword)
        cy.contains(this.fxt.messageRedirect).should('be.visible');

		loginCoderbyte.writeEmail(this.fxt.username.valid);
		loginCoderbyte.clickResetPassword();

        cy.contains(this.fxt.emailResetSuccessfully).should('be.visible');
        
	})
    
    it('16573 | TC4: Validate can’t reset password due to incorrect email address.', () => {

        loginCoderbyte.clickForgotPassword();
        
        cy.url().should('contain', this.fxt.forgotPassword);
        cy.contains(this.fxt.messageRedirect).should('be.visible');
        
		loginCoderbyte.writeEmail(this.fxt.username.invalid);
		loginCoderbyte.clickResetPassword();

        cy.contains(this.fxt.emailResetFail).should('exist')
        
	})
    
    it('16573 | TC5: Validate can logout successfully.', () => {

		loginCoderbyte.writeUsername(this.fxt.username.valid);
		loginCoderbyte.writePassword(this.fxt.password.valid);
		loginCoderbyte.clickLoginButton();

        cy.url().should('contain', this.fxt.login);
        
        loginCoderbyte.hoverMyProfile()
        loginCoderbyte.clickLogoutButton()

        cy.url().should('contain', this.fxt.logout)

    })
})