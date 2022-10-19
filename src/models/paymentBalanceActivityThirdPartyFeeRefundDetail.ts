import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityThirdPartyFeeRefundDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
  /** The public refund id associated with this activity. */
  refundId?: string;
}

export const paymentBalanceActivityThirdPartyFeeRefundDetailSchema: Schema<PaymentBalanceActivityThirdPartyFeeRefundDetail> = object(
  {
    paymentId: ['payment_id', optional(string())],
    refundId: ['refund_id', optional(string())],
  }
);
