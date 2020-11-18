import { Client, Configuration, Environment } from '../src';

const defaultTestConfiguration: Partial<Configuration> = {
  environment: Environment.Sandbox,
  timeout: 30000,
};

export const testClient = new Client({
  ...defaultTestConfiguration,
  ...createConfigurationFromEnvironment(),
});

function createConfigurationFromEnvironment(): Partial<Configuration> {
  const config: Partial<Configuration> = {};

  const timeout = process.env.SQUARE_TIMEOUT;
  const accessToken = process.env.SQUARE_SANDBOX_TOKEN;

  if (timeout !== undefined && timeout !== '') {
    config.timeout = parseInt(timeout);
  }

  if (accessToken !== undefined && accessToken !== '') {
    config.accessToken = accessToken;
  }

  return config;
}
