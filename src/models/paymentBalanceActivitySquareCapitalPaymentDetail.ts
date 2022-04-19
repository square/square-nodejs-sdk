import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivitySquareCapitalPaymentDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivitySquareCapitalPaymentDetailSchema: Schema<PaymentBalanceActivitySquareCapitalPaymentDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
