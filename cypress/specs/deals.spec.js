import { DealsPage, HomePage } from '../page-objects/pages';

describe('Deals', () => {
  before(() => {
    HomePage.open();
    HomePage.header.getPrimaryNavItem('Deals').click();
  });

  it('should navigate to deals page upon clicking Deals link', () => {
    cy.url().should('eq', Cypress.config().baseUrl + DealsPage.route)
  });

  it('should display deals and prices', () => {
    cy.wrap([0, 1, 2]).each(dNum => {
      cy.fixture('resources/deals').then(({tv}) => {
        const deal = DealsPage.getDeal(dNum);

        deal.name.should('have.text', tv[dNum].name);
        deal.price.should('contain.text', tv[dNum].price);
      })
    });
  });
});
