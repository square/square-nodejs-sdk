import { lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the __CreateMobileAuthorizationCode__ endpoint.
 */
export interface CreateMobileAuthorizationCodeResponse {
  /**
   * Generated authorization code that connects a mobile application instance
   * to a Square account.
   */
  authorizationCode?: string;
  /**
   * The timestamp when `authorization_code` expires in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339) format, e.g., "2016-09-04T23:59:33.123Z".
   */
  expiresAt?: string;
  /**
   * Represents an error encountered during a request to the Connect API.
   * See [Handling errors](#handlingerrors) for more information.
   */
  error?: Error;
}

export const createMobileAuthorizationCodeResponseSchema: Schema<CreateMobileAuthorizationCodeResponse> = object(
  {
    authorizationCode: ['authorization_code', optional(string())],
    expiresAt: ['expires_at', optional(string())],
    error: ['error', optional(lazy(() => errorSchema))],
  }
);
