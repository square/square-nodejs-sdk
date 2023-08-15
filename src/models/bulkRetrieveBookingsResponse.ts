import { array, dict, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  RetrieveBookingResponse,
  retrieveBookingResponseSchema,
} from './retrieveBookingResponse';

/** Response payload for bulk retrieval of bookings. */
export interface BulkRetrieveBookingsResponse {
  /** Requested bookings returned as a map containing `booking_id` as the key and `RetrieveBookingResponse` as the value. */
  bookings?: Record<string, RetrieveBookingResponse>;
  /** Errors that occurred during the request. */
  errors?: Error[];
}

export const bulkRetrieveBookingsResponseSchema: Schema<BulkRetrieveBookingsResponse> = object(
  {
    bookings: [
      'bookings',
      optional(dict(lazy(() => retrieveBookingResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
