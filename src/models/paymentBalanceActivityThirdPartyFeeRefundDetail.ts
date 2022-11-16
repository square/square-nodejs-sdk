import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityThirdPartyFeeRefundDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The public refund id associated with this activity. */
  refundId?: string | null;
}

export const paymentBalanceActivityThirdPartyFeeRefundDetailSchema: Schema<PaymentBalanceActivityThirdPartyFeeRefundDetail> = object(
  {
    paymentId: ['payment_id', optional(nullable(string()))],
    refundId: ['refund_id', optional(nullable(string()))],
  }
);
