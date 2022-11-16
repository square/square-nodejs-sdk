import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityReleaseAdjustmentDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivityReleaseAdjustmentDetailSchema: Schema<PaymentBalanceActivityReleaseAdjustmentDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
