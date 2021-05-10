import BasePage from './base';

class LoginPage extends BasePage {
  get usernameInput() {
    return cy.get('#username');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get signInButton() {
    return cy.get('#signinButton');
  }

  get signInErrorMessage() {
    return cy.get('.globalErrors ul li');
  }

  login(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.signInButton.click();
  }
}

export default new LoginPage();
