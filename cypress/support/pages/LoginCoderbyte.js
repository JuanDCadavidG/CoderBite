class LoginCoderbyte {

	element = {
		loginForm: () => cy.get('.mode-toggle>div').eq('0'),
		usernameInput: () => cy.get('[type="text"]'),
		passwordInput: () => cy.get('[type="password"]'),
		loginButton: () => cy.get('.login-actions>button'),
		forgotPassword: () => cy.get('.login-actions>a'),
		emailInput: () => cy.get('[name="fp_email"]'),
		resetPassword: () => cy.get('[name="fp_reset"]'),
		myProfile: () => cy.get('.menu-item-extension.right'),
		logoutButton: () => cy.get('[href="/logout"]'),
	}

	clickLoginForm() {
		this.element.loginForm().click();
	}

	writeUsername(username) {
		this.element.usernameInput().type(username);
	}

	writePassword(password) {
		this.element.passwordInput().type(password);
	}

	clickLoginButton() {
		this.element.loginButton().click();
	}

	clickForgotPassword() {
		this.element.forgotPassword().click();
	}

	writeEmail(email) {
		this.element.emailInput().type(email);
	}

	clickResetPassword() {
		this.element.resetPassword().click();
	}

	hoverMyProfile() {
		this.element.myProfile()
	}

	clickLogoutButton() {
		this.element.logoutButton().click({ force: true });
	}
}

export const loginCoderbyte = new LoginCoderbyte();