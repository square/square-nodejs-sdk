import { object, optional, Schema, string } from '../schema';

/** The timeline for card payments. */
export interface CardPaymentTimeline {
  /** The timestamp when the payment was authorized, in RFC 3339 format. */
  authorizedAt?: string;
  /** The timestamp when the payment was captured, in RFC 3339 format. */
  capturedAt?: string;
  /** The timestamp when the payment was voided, in RFC 3339 format. */
  voidedAt?: string;
}

export const cardPaymentTimelineSchema: Schema<CardPaymentTimeline> = object({
  authorizedAt: ['authorized_at', optional(string())],
  capturedAt: ['captured_at', optional(string())],
  voidedAt: ['voided_at', optional(string())],
});
