import { object, optional, Schema, string } from '../schema';

/**
 * Defines the body parameters that can be provided in a request to the
 * __CreateMobileAuthorizationCode__ endpoint.
 */
export interface CreateMobileAuthorizationCodeRequest {
  /** The Square location ID the authorization code should be tied to. */
  locationId?: string;
}

export const createMobileAuthorizationCodeRequestSchema: Schema<CreateMobileAuthorizationCodeRequest> = object(
  { locationId: ['location_id', optional(string())] }
);
