import { nullable, number, object, optional, Schema, string } from '../schema';

export interface CancelBookingRequest {
  /** A unique key to make this request an idempotent operation. */
  idempotencyKey?: string | null;
  /** The revision number for the booking used for optimistic concurrency. */
  bookingVersion?: number | null;
}

export const cancelBookingRequestSchema: Schema<CancelBookingRequest> = object({
  idempotencyKey: ['idempotency_key', optional(nullable(string()))],
  bookingVersion: ['booking_version', optional(nullable(number()))],
});
