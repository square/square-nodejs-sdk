import { object, Schema, string } from '../schema';

/**
 * Represents an individual delete request in a [BulkDeleteBookingCustomAttributes]($e/BookingCustomAttributes/BulkDeleteBookingCustomAttributes)
 * request. An individual request contains a booking ID, the custom attribute to delete, and an optional idempotency key.
 */
export interface BookingCustomAttributeDeleteRequest {
  /** The ID of the target [booking](entity:Booking). */
  bookingId: string;
  /**
   * The key of the custom attribute to delete. This key must match the `key` of a
   * custom attribute definition in the Square seller account. If the requesting application is not
   * the definition owner, you must use the qualified key.
   */
  key: string;
}

export const bookingCustomAttributeDeleteRequestSchema: Schema<BookingCustomAttributeDeleteRequest> = object(
  { bookingId: ['booking_id', string()], key: ['key', string()] }
);
