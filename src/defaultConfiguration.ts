import { Configuration, Environment } from './configuration';
import { RetryConfiguration } from './core';

/** Default values for the configuration parameters of the client. */
export const DEFAULT_CONFIGURATION: Configuration = {
  timeout: 60000,
  squareVersion: '2024-12-18',
  additionalHeaders: {},
  userAgentDetail: '',
  environment: Environment.Production,
  customUrl: 'https://connect.squareup.com',
};

/** Default values for retry configuration parameters. */
export const DEFAULT_RETRY_CONFIG: RetryConfiguration = {
  maxNumberOfRetries: 0,
  retryOnTimeout: true,
  retryInterval: 1,
  maximumRetryWaitTime: 0,
  backoffFactor: 2,
  httpStatusCodesToRetry: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
  httpMethodsToRetry: ['GET', 'PUT'],
};
