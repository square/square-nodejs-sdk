import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivitySquareCapitalPaymentDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivitySquareCapitalPaymentDetailSchema: Schema<PaymentBalanceActivitySquareCapitalPaymentDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
