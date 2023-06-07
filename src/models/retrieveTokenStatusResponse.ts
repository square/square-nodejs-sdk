import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the `RetrieveTokenStatus` endpoint.
 */
export interface RetrieveTokenStatusResponse {
  /** The list of scopes associated with an access token. */
  scopes?: string[];
  /** The date and time when the `access_token` expires, in RFC 3339 format. Empty if the token never expires. */
  expiresAt?: string;
  /** The Square-issued application ID associated with the access token. This is the same application ID used to obtain the token. */
  clientId?: string;
  /** The ID of the authorizing merchant's business. */
  merchantId?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const retrieveTokenStatusResponseSchema: Schema<RetrieveTokenStatusResponse> = object(
  {
    scopes: ['scopes', optional(array(string()))],
    expiresAt: ['expires_at', optional(string())],
    clientId: ['client_id', optional(string())],
    merchantId: ['merchant_id', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
