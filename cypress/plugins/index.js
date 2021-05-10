const configuration = require('../fixtures/resources/config.json');

module.exports = (on, config) => {
  const availableEnvs = Object.keys(configuration);
  const { ENV } = config.env;
  const testEnv = ENV.toLowerCase();

  if (!availableEnvs.includes(testEnv)) {
    throw Error(`"${testEnv}" environment is not configured to run tests. Available environments are ${availableEnvs}.`);
  }

  const { baseUrl } = configuration[testEnv];

  config.baseUrl = baseUrl;

  return config;
};

