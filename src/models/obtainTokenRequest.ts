import { array, boolean, object, optional, Schema, string } from '../schema';

export interface ObtainTokenRequest {
  /**
   * The Square-issued ID of your application, which is available in the OAuth page in the
   * [Developer Dashboard](https://developer.squareup.com/apps).
   */
  clientId: string;
  /**
   * The Square-issued application secret for your application, which is available in the OAuth page
   * in the [Developer Dashboard](https://developer.squareup.com/apps).
   */
  clientSecret: string;
  /**
   * The authorization code to exchange.
   * This code is required if `grant_type` is set to `authorization_code` to indicate that
   * the application wants to exchange an authorization code for an OAuth access token.
   */
  code?: string;
  /** The redirect URL assigned in the OAuth page for your application in the [Developer Dashboard](https://developer.squareup.com/apps). */
  redirectUri?: string;
  /**
   * Specifies the method to request an OAuth access token.
   * Valid values are `authorization_code`, `refresh_token`, and `migration_token`.
   */
  grantType: string;
  /**
   * A valid refresh token for generating a new OAuth access token.
   * A valid refresh token is required if `grant_type` is set to `refresh_token`
   * to indicate that the application wants a replacement for an expired OAuth access token.
   */
  refreshToken?: string;
  /**
   * A legacy OAuth access token obtained using a Connect API version prior
   * to 2019-03-13. This parameter is required if `grant_type` is set to
   * `migration_token` to indicate that the application wants to get a replacement
   * OAuth access token. The response also returns a refresh token.
   * For more information, see [Migrate to Using Refresh Tokens](https://developer.squareup.com/docs/oauth-api/migrate-to-refresh-tokens).
   */
  migrationToken?: string;
  /**
   * A JSON list of strings representing the permissions that the application is requesting.
   * For example, "`["MERCHANT_PROFILE_READ","PAYMENTS_READ","BANK_ACCOUNTS_READ"]`".
   * The access token returned in the response is granted the permissions
   * that comprise the intersection between the requested list of permissions and those
   * that belong to the provided refresh token.
   */
  scopes?: string[];
  /**
   * A Boolean indicating a request for a short-lived access token.
   * The short-lived access token returned in the response expires in 24 hours.
   */
  shortLived?: boolean;
}

export const obtainTokenRequestSchema: Schema<ObtainTokenRequest> = object({
  clientId: ['client_id', string()],
  clientSecret: ['client_secret', string()],
  code: ['code', optional(string())],
  redirectUri: ['redirect_uri', optional(string())],
  grantType: ['grant_type', string()],
  refreshToken: ['refresh_token', optional(string())],
  migrationToken: ['migration_token', optional(string())],
  scopes: ['scopes', optional(array(string()))],
  shortLived: ['short_lived', optional(boolean())],
});
