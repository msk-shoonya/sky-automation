# Sky Automation Tests

This project uses [Cypress](https://www.cypress.io/) with [Mocha](https://mochajs.org/)

## Setup

### Install dependencies

```console
$ npm install  # installs test dependencies
```

## Steps to run tests

Once the dependencies are installed, use the below command to run the tests.

```console
$ npm test         # runs all tests in headless mode
$ npm run cy:open  # opens all tests in Cypress test runner interactive mode
```

## Test Results

The test status is logged in the terminal while the test runs. The test output(`json` and `junit`) and the screenshots for the failed tests can be found under _results_ directory after the test run.

Once the test run is completed, use the below command to generate an HTML report under _results_ directory.

```console
$ npm run report
```

**Note**: Video output for the test run can also be achieved by setting `"video": true` in `cypress.json`. A video of the test run for each spec file will be created under _results_ directory.
