import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityReleaseAdjustmentDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivityReleaseAdjustmentDetailSchema: Schema<PaymentBalanceActivityReleaseAdjustmentDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
