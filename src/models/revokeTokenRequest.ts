import { boolean, object, optional, Schema, string } from '../schema';

export interface RevokeTokenRequest {
  /**
   * The Square issued ID for your application, available from the
   * [application dashboard](https://connect.squareup.com/apps).
   */
  clientId?: string;
  /**
   * The access token of the merchant whose token you want to revoke.
   * Do not provide a value for merchant_id if you provide this parameter.
   */
  accessToken?: string;
  /**
   * The ID of the merchant whose token you want to revoke.
   * Do not provide a value for access_token if you provide this parameter.
   */
  merchantId?: string;
  /**
   * If `true`, terminate the given single access token, but do not
   * terminate the entire authorization.
   * Default: `false`
   */
  revokeOnlyAccessToken?: boolean;
}

export const revokeTokenRequestSchema: Schema<RevokeTokenRequest> = object({
  clientId: ['client_id', optional(string())],
  accessToken: ['access_token', optional(string())],
  merchantId: ['merchant_id', optional(string())],
  revokeOnlyAccessToken: ['revoke_only_access_token', optional(boolean())],
});
