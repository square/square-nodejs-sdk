import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityFeeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivityFeeDetailSchema: Schema<PaymentBalanceActivityFeeDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
