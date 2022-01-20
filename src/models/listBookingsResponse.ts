import { array, lazy, object, optional, Schema, string } from '../schema';
import { Booking, bookingSchema } from './booking';
import { Error, errorSchema } from './error';

export interface ListBookingsResponse {
  /** The list of targeted bookings. */
  bookings?: Booking[];
  /** The pagination cursor to be used in the subsequent request to get the next page of the results. Stop retrieving the next page of the results when the cursor is not set. */
  cursor?: string;
  /** Errors that occurred during the request. */
  errors?: Error[];
}

export const listBookingsResponseSchema: Schema<ListBookingsResponse> = object({
  bookings: ['bookings', optional(array(lazy(() => bookingSchema)))],
  cursor: ['cursor', optional(string())],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
