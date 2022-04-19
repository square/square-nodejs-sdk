import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityOtherDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivityOtherDetailSchema: Schema<PaymentBalanceActivityOtherDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
