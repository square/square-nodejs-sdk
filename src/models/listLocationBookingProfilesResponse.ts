import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import {
  LocationBookingProfile,
  locationBookingProfileSchema,
} from './locationBookingProfile';

export interface ListLocationBookingProfilesResponse {
  /** The list of a seller's location booking profiles. */
  locationBookingProfiles?: LocationBookingProfile[];
  /** The pagination cursor to be used in the subsequent request to get the next page of the results. Stop retrieving the next page of the results when the cursor is not set. */
  cursor?: string;
  /** Errors that occurred during the request. */
  errors?: Error[];
}

export const listLocationBookingProfilesResponseSchema: Schema<ListLocationBookingProfilesResponse> = object(
  {
    locationBookingProfiles: [
      'location_booking_profiles',
      optional(array(lazy(() => locationBookingProfileSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
