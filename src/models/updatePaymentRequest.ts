import { lazy, object, optional, Schema, string } from '../schema';
import { Payment, paymentSchema } from './payment';

/**
 * Describes a request to update a payment using
 * [UpdatePayment](#endpoint-payments-updatepayment).
 */
export interface UpdatePaymentRequest {
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
  /**
   * A unique string that identifies this `UpdatePayment` request. Keys can be any valid string
   * but must be unique for every `UpdatePayment` request.
   * The maximum is 45 characters.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency).
   */
  idempotencyKey: string;
}

export const updatePaymentRequestSchema: Schema<UpdatePaymentRequest> = object({
  payment: ['payment', optional(lazy(() => paymentSchema))],
  idempotencyKey: ['idempotency_key', string()],
});
