import BasePage from './base';
import DealTile from '../sections/deal-tile';

class DealsPage extends BasePage {
  route = '/deals';

  get deals() {
    return cy.get('[data-content-id*="offer"]');
  }

  getDeal(dealNumber) {
    return new DealTile(dealNumber);
  }
}

export default new DealsPage();
