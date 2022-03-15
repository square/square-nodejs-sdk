import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

export interface RenewTokenResponse {
  /**
   * The renewed access token.
   * This value might be different from the `access_token` you provided in your request.
   * You provide this token in a header with every request to Connect API endpoints.
   * See [Request and response headers](https://developer.squareup.com/docs/api/connect/v2/#requestandresponseheaders) for the format of this header.
   */
  accessToken?: string;
  /** This value is always _bearer_. */
  tokenType?: string;
  /** The date when the `access_token` expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format. */
  expiresAt?: string;
  /** The ID of the authorizing merchant's business. */
  merchantId?: string;
  /**
   * __LEGACY FIELD__. The ID of the merchant subscription associated with
   * the authorization. The ID is only present if the merchant signed up for a subscription
   * during authorization.
   */
  subscriptionId?: string;
  /**
   * __LEGACY FIELD__. The ID of the subscription plan the merchant signed
   * up for. The ID is only present if the merchant signed up for a subscription plan during
   * authorization.
   */
  planId?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const renewTokenResponseSchema: Schema<RenewTokenResponse> = object({
  accessToken: ['access_token', optional(string())],
  tokenType: ['token_type', optional(string())],
  expiresAt: ['expires_at', optional(string())],
  merchantId: ['merchant_id', optional(string())],
  subscriptionId: ['subscription_id', optional(string())],
  planId: ['plan_id', optional(string())],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
