import { boolean, object, optional, Schema, string } from '../schema';

export interface ObtainTokenResponse {
  /**
   * A valid OAuth access token. OAuth access tokens are 64 bytes long.
   * Provide the access token in a header with every request to Connect API
   * endpoints. See [OAuth API: Walkthrough](https://developer.squareup.com/docs/oauth-api/walkthrough)
   * for more information.
   */
  accessToken?: string;
  /** This value is always _bearer_. */
  tokenType?: string;
  /** The date when access_token expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format. */
  expiresAt?: string;
  /** The ID of the authorizing merchant's business. */
  merchantId?: string;
  /**
   * __LEGACY FIELD__. The ID of a subscription plan the merchant signed up
   * for. Only present if the merchant signed up for a subscription during authorization.
   */
  subscriptionId?: string;
  /**
   * __LEGACY FIELD__. The ID of the subscription plan the merchant signed
   * up for. Only present if the merchant signed up for a subscription during
   * authorization.
   */
  planId?: string;
  /**
   * Then OpenID token belonging to this this person. Only present if the
   * OPENID scope is included in the authorize request.
   */
  idToken?: string;
  /**
   * A refresh token. OAuth refresh tokens are 64 bytes long.
   * For more information, see [OAuth access token management](https://developer.squareup.com/docs/authz/oauth/how-it-works#oauth-access-token-management).
   */
  refreshToken?: string;
  /**
   * A boolean indicating the access token is a short-lived access token.
   * The short-lived access token returned in the response will expire in 24 hours.
   */
  shortLived?: boolean;
}

export const obtainTokenResponseSchema: Schema<ObtainTokenResponse> = object({
  accessToken: ['access_token', optional(string())],
  tokenType: ['token_type', optional(string())],
  expiresAt: ['expires_at', optional(string())],
  merchantId: ['merchant_id', optional(string())],
  subscriptionId: ['subscription_id', optional(string())],
  planId: ['plan_id', optional(string())],
  idToken: ['id_token', optional(string())],
  refreshToken: ['refresh_token', optional(string())],
  shortLived: ['short_lived', optional(boolean())],
});
