import addContext from 'mochawesome/addContext';

Cypress.Cookies.defaults({ preserve: ['consentUUID'] });

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let screenshotFileName = `${test.title} (failed).png`;
    let testContext = runnable && runnable.parent;

    while (testContext && testContext.title) {
      screenshotFileName = `${testContext.title} -- ${screenshotFileName}`;
      testContext = testContext.parent;
    }

    addContext({ test }, `${Cypress.config().screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`);
  }
});


Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from failing the test due to ReferenceError: __tcfapi is not defined
  return false;
})

before(() => {
  cy.setCookie('consentUUID', '70f4937a-5fc5-454a-8998-6e1d09e37377');
})
