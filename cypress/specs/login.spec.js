import { HomePage, LoginPage } from '../page-objects/pages';

describe('Login', () => {
  before(() => {
    HomePage.open();
  });

  it('should display error message upon sign in with invalid credentials', () => {
    HomePage.header.signInLink.click();
    cy.fixture('resources/credentials').then(userDetails => {
      const { username, password } = userDetails.invalid;

      LoginPage.login(username, password);
    });
    cy.fixture('resources/messages').then(messages => {
      LoginPage.signInErrorMessage.should('be.visible').and('have.text', messages.error.signIn);
    });
  });
});
