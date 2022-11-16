import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityRefundDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the refund associated with this activity. */
  refundId?: string | null;
}

export const paymentBalanceActivityRefundDetailSchema: Schema<PaymentBalanceActivityRefundDetail> = object(
  {
    paymentId: ['payment_id', optional(nullable(string()))],
    refundId: ['refund_id', optional(nullable(string()))],
  }
);
