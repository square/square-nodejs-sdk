import { Configuration, Environment } from './configuration';

/** Default values for the configuration parameters of the client. */
export const DEFAULT_CONFIGURATION: Configuration = {
  timeout: 60000,
  additionalHeaders: {},
  environment: Environment.Production,
  accessToken: 'TODO access token',
};
