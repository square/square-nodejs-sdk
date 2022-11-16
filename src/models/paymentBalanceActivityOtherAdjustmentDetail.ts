import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityOtherAdjustmentDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivityOtherAdjustmentDetailSchema: Schema<PaymentBalanceActivityOtherAdjustmentDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
