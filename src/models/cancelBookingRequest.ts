import { number, object, optional, Schema, string } from '../schema';

export interface CancelBookingRequest {
  /** A unique key to make this request an idempotent operation. */
  idempotencyKey?: string;
  /** The revision number for the booking used for optimistic concurrency. */
  bookingVersion?: number;
}

export const cancelBookingRequestSchema: Schema<CancelBookingRequest> = object({
  idempotencyKey: ['idempotency_key', optional(string())],
  bookingVersion: ['booking_version', optional(number())],
});
