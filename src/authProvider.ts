import {
  accessTokenAuthenticationProvider,
  compositeAuthenticationProvider,
} from './authentication';
import { Configuration } from './configuration';

export function createAuthProviderFromConfig(config: Partial<Configuration>) {
  const authConfig = {
    global:
      config.bearerAuthCredentials &&
      accessTokenAuthenticationProvider(config.bearerAuthCredentials),
  };

  return compositeAuthenticationProvider<
    keyof typeof authConfig,
    typeof authConfig
  >(authConfig);
}
