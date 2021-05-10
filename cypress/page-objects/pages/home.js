import BasePage from './base';

class HomePage extends BasePage {
  constructor() {
    super();
    this.route = '/';
  }
}

export default new HomePage();
