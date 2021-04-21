import { object, Schema, string } from '../schema';

/**
 * Describes a request to cancel a payment using
 * [CancelPaymentByIdempotencyKey]($e/Payments/CancelPaymentByIdempotencyKey).
 */
export interface CancelPaymentByIdempotencyKeyRequest {
  /** The `idempotency_key` identifying the payment to be canceled. */
  idempotencyKey: string;
}

export const cancelPaymentByIdempotencyKeyRequestSchema: Schema<CancelPaymentByIdempotencyKeyRequest> = object(
  { idempotencyKey: ['idempotency_key', string()] }
);
