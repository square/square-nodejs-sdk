import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityThirdPartyFeeRefundDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivityThirdPartyFeeRefundDetailSchema: Schema<PaymentBalanceActivityThirdPartyFeeRefundDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
