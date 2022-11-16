import { nullable, object, optional, Schema, string } from '../schema';

/** The timeline for card payments. */
export interface CardPaymentTimeline {
  /** The timestamp when the payment was authorized, in RFC 3339 format. */
  authorizedAt?: string | null;
  /** The timestamp when the payment was captured, in RFC 3339 format. */
  capturedAt?: string | null;
  /** The timestamp when the payment was voided, in RFC 3339 format. */
  voidedAt?: string | null;
}

export const cardPaymentTimelineSchema: Schema<CardPaymentTimeline> = object({
  authorizedAt: ['authorized_at', optional(nullable(string()))],
  capturedAt: ['captured_at', optional(nullable(string()))],
  voidedAt: ['voided_at', optional(nullable(string()))],
});
