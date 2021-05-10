import BasePage from './base';

class SearchResultsPage extends BasePage {
  get editorialSection() {
    return cy.get('.c-editorial-layer');
  }
}

export default new SearchResultsPage();
