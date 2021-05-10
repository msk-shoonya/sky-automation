import Header from '../sections/header';

export default class BasePage {
  get header() {
    return new Header();
  }

  open(acceptCookies = true) {
    cy.visit(this.route);
    // if(acceptCookies) {
    //   cy.setCookie('consentUUID', '70f4937a-5fc5-454a-8998-6e1d09e37377').reload();
    // }
  }
}
