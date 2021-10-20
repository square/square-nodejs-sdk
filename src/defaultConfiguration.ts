import { Configuration, Environment } from './configuration';

/** Default values for the configuration parameters of the client. */
export const DEFAULT_CONFIGURATION: Configuration = {
  timeout: 60000,
  squareVersion: '2021-10-20',
  additionalHeaders: {},
  environment: Environment.Production,
  customUrl: 'https://connect.squareup.com',
  accessToken: '',
};
