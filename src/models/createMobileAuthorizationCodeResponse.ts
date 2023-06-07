import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the `CreateMobileAuthorizationCode` endpoint.
 */
export interface CreateMobileAuthorizationCodeResponse {
  /**
   * The generated authorization code that connects a mobile application instance
   * to a Square account.
   */
  authorizationCode?: string;
  /**
   * The timestamp when `authorization_code` expires, in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339) format (for example, "2016-09-04T23:59:33.123Z").
   */
  expiresAt?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const createMobileAuthorizationCodeResponseSchema: Schema<CreateMobileAuthorizationCodeResponse> = object(
  {
    authorizationCode: ['authorization_code', optional(string())],
    expiresAt: ['expires_at', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
