import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityDepositFeeDetail {
  /** The ID of the payout that triggered this deposit fee activity. */
  payoutId?: string | null;
}

export const paymentBalanceActivityDepositFeeDetailSchema: Schema<PaymentBalanceActivityDepositFeeDetail> = object(
  { payoutId: ['payout_id', optional(nullable(string()))] }
);
