import { array, lazy, object, optional, Schema } from '../schema';
import { Booking, bookingSchema } from './booking';
import { Error, errorSchema } from './error';

export interface UpdateBookingResponse {
  /**
   * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
   * at a given location to a requesting customer in one or more appointment segments.
   */
  booking?: Booking;
  /** Errors that occurred during the request. */
  errors?: Error[];
}

export const updateBookingResponseSchema: Schema<UpdateBookingResponse> = object(
  {
    booking: ['booking', optional(lazy(() => bookingSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
