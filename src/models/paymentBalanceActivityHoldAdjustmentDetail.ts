import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityHoldAdjustmentDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivityHoldAdjustmentDetailSchema: Schema<PaymentBalanceActivityHoldAdjustmentDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
