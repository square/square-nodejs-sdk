import { object, optional, Schema, string } from '../schema';

/** The payment the cardholder disputed. */
export interface DisputedPayment {
  /** Square-generated unique ID of the payment being disputed. */
  paymentId?: string;
}

export const disputedPaymentSchema: Schema<DisputedPayment> = object({
  paymentId: ['payment_id', optional(string())],
});
