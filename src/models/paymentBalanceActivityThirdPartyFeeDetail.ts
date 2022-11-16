import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityThirdPartyFeeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivityThirdPartyFeeDetailSchema: Schema<PaymentBalanceActivityThirdPartyFeeDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
