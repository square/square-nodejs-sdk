import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivitySquareCapitalReversedPaymentDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema: Schema<PaymentBalanceActivitySquareCapitalReversedPaymentDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
