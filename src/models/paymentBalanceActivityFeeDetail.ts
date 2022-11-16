import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityFeeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivityFeeDetailSchema: Schema<PaymentBalanceActivityFeeDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
