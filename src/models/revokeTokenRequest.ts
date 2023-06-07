import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface RevokeTokenRequest {
  /**
   * The Square-issued ID for your application, which is available on the **OAuth** page in the
   * [Developer Dashboard](https://developer.squareup.com/apps).
   */
  clientId?: string | null;
  /**
   * The access token of the merchant whose token you want to revoke.
   * Do not provide a value for `merchant_id` if you provide this parameter.
   */
  accessToken?: string | null;
  /**
   * The ID of the merchant whose token you want to revoke.
   * Do not provide a value for `access_token` if you provide this parameter.
   */
  merchantId?: string | null;
  /**
   * If `true`, terminate the given single access token, but do not
   * terminate the entire authorization.
   * Default: `false`
   */
  revokeOnlyAccessToken?: boolean | null;
}

export const revokeTokenRequestSchema: Schema<RevokeTokenRequest> = object({
  clientId: ['client_id', optional(nullable(string()))],
  accessToken: ['access_token', optional(nullable(string()))],
  merchantId: ['merchant_id', optional(nullable(string()))],
  revokeOnlyAccessToken: [
    'revoke_only_access_token',
    optional(nullable(boolean())),
  ],
});
