import { nullable, object, optional, Schema, string } from '../schema';

/** The payment the cardholder disputed. */
export interface DisputedPayment {
  /** Square-generated unique ID of the payment being disputed. */
  paymentId?: string | null;
}

export const disputedPaymentSchema: Schema<DisputedPayment> = object({
  paymentId: ['payment_id', optional(nullable(string()))],
});
