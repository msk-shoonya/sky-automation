import { HomePage, SearchResultsPage } from '../page-objects/pages';

describe('Search', () => {
  before(() => {
    HomePage.open();
  });

  it('should display editorial section on search', () => {
    HomePage.header.searchToggle.click();
    HomePage.header.searchInput.type('sky');
    HomePage.header.editorialSection.should('be.visible');
    HomePage.header.searchInput.type('{enter}');
    SearchResultsPage.editorialSection.should('be.visible');
  });
});
