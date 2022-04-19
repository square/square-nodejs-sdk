import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityTaxOnFeeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivityTaxOnFeeDetailSchema: Schema<PaymentBalanceActivityTaxOnFeeDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
