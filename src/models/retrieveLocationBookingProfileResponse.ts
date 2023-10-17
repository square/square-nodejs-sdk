import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  LocationBookingProfile,
  locationBookingProfileSchema,
} from './locationBookingProfile';

export interface RetrieveLocationBookingProfileResponse {
  /** The booking profile of a seller's location, including the location's ID and whether the location is enabled for online booking. */
  locationBookingProfile?: LocationBookingProfile;
  /** Errors that occurred during the request. */
  errors?: Error[];
}

export const retrieveLocationBookingProfileResponseSchema: Schema<RetrieveLocationBookingProfileResponse> = object(
  {
    locationBookingProfile: [
      'location_booking_profile',
      optional(lazy(() => locationBookingProfileSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
