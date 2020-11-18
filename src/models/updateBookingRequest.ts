import { lazy, object, optional, Schema, string } from '../schema';
import { Booking, bookingSchema } from './booking';

export interface UpdateBookingRequest {
  /** A unique key to make this request an idempotent operation. */
  idempotencyKey?: string;
  /**
   * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
   * at a given location to a requesting customer in one or more appointment segments.
   */
  booking: Booking;
}

export const updateBookingRequestSchema: Schema<UpdateBookingRequest> = object({
  idempotencyKey: ['idempotency_key', optional(string())],
  booking: ['booking', lazy(() => bookingSchema)],
});
