import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityAppFeeRevenueDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the location of the merchant associated with the payment activity */
  locationId?: string | null;
}

export const paymentBalanceActivityAppFeeRevenueDetailSchema: Schema<PaymentBalanceActivityAppFeeRevenueDetail> = object(
  {
    paymentId: ['payment_id', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
  }
);
