import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityHoldAdjustmentDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivityHoldAdjustmentDetailSchema: Schema<PaymentBalanceActivityHoldAdjustmentDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
