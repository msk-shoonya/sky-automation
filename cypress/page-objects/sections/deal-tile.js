export default class DealTile {
  constructor(index) {
    this.index = index;
    this.selector = '[data-content-id*="offer."]';
  }

  get element() {
    return cy.get(this.selector).eq(this.index);
  }

  get name() {
    return this.element.find('.glIwtA')
  }

  get price() {
    return this.element.find('.ebwAcM')
  }
}
