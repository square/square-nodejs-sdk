import { array, lazy, object, optional, Schema } from '../schema';
import { Availability, availabilitySchema } from './availability';
import { Error, errorSchema } from './error';

export interface SearchAvailabilityResponse {
  /** List of slots available for booking. */
  availabilities?: Availability[];
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const searchAvailabilityResponseSchema: Schema<SearchAvailabilityResponse> = object(
  {
    availabilities: [
      'availabilities',
      optional(array(lazy(() => availabilitySchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
