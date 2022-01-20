import { array, lazy, object, optional, Schema } from '../schema';
import {
  BusinessBookingProfile,
  businessBookingProfileSchema,
} from './businessBookingProfile';
import { Error, errorSchema } from './error';

export interface RetrieveBusinessBookingProfileResponse {
  businessBookingProfile?: BusinessBookingProfile;
  /** Errors that occurred during the request. */
  errors?: Error[];
}

export const retrieveBusinessBookingProfileResponseSchema: Schema<RetrieveBusinessBookingProfileResponse> = object(
  {
    businessBookingProfile: [
      'business_booking_profile',
      optional(lazy(() => businessBookingProfileSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
