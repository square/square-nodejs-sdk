import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityRefundDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
  /** The ID of the refund associated with this activity. */
  refundId?: string;
}

export const paymentBalanceActivityRefundDetailSchema: Schema<PaymentBalanceActivityRefundDetail> = object(
  {
    paymentId: ['payment_id', optional(string())],
    refundId: ['refund_id', optional(string())],
  }
);
