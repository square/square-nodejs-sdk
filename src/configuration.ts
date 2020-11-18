/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  additionalHeaders: Readonly<Record<string, string>>;
  environment: Environment;
  accessToken: string;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
  Sandbox = 'sandbox',
}
