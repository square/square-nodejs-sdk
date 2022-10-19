import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityAppFeeRefundDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
  /** The ID of the refund associated with this activity. */
  refundId?: string;
  /** The ID of the location of the merchant associated with the payment refund activity */
  locationId?: string;
}

export const paymentBalanceActivityAppFeeRefundDetailSchema: Schema<PaymentBalanceActivityAppFeeRefundDetail> = object(
  {
    paymentId: ['payment_id', optional(string())],
    refundId: ['refund_id', optional(string())],
    locationId: ['location_id', optional(string())],
  }
);
