import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityAppFeeRefundDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the refund associated with this activity. */
  refundId?: string | null;
  /** The ID of the location of the merchant associated with the payment refund activity */
  locationId?: string | null;
}

export const paymentBalanceActivityAppFeeRefundDetailSchema: Schema<PaymentBalanceActivityAppFeeRefundDetail> = object(
  {
    paymentId: ['payment_id', optional(nullable(string()))],
    refundId: ['refund_id', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
  }
);
