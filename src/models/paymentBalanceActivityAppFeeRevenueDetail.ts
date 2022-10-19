import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityAppFeeRevenueDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
  /** The ID of the location of the merchant associated with the payment activity */
  locationId?: string;
}

export const paymentBalanceActivityAppFeeRevenueDetailSchema: Schema<PaymentBalanceActivityAppFeeRevenueDetail> = object(
  {
    paymentId: ['payment_id', optional(string())],
    locationId: ['location_id', optional(string())],
  }
);
