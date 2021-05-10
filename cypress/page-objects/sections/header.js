export default class Header {
  constructor() {
    this.selector = '[data-test-id="header"]';
  }

  get element() {
    return cy.get(this.selector);
  }

  get navbar() {
    return this.element.find('[data-test-id="nav"]')
  }

  get searchToggle() {
    return this.element.find('[data-test-id="masthead-search-toggle-button"]')
  }

  get searchInput() {
    return this.element.find('[data-test-id="input-box"]');
  }

  get editorialSection() {
    return this.element.find('[data-test-id="editorial-section"]')
  }

  get signInLink() {
    return this.element.find('[data-test-id="sign-in-link"]');
  }

  getPrimaryNavItem(name) {
    return this.element.contains('.primary-nav-link[data-test-id="nav-item-link"]', name)
  }
}
