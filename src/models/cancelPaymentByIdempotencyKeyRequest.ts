import { object, Schema, string } from '../schema';

/** Specifies idempotency key of a payment to cancel. */
export interface CancelPaymentByIdempotencyKeyRequest {
  /** `idempotency_key` identifying the payment to be canceled. */
  idempotencyKey: string;
}

export const cancelPaymentByIdempotencyKeyRequestSchema: Schema<CancelPaymentByIdempotencyKeyRequest> = object(
  { idempotencyKey: ['idempotency_key', string()] }
);
