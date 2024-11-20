import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityDepositFeeReversedDetail {
  /** The ID of the payout that triggered this deposit fee activity. */
  payoutId?: string | null;
}

export const paymentBalanceActivityDepositFeeReversedDetailSchema: Schema<PaymentBalanceActivityDepositFeeReversedDetail> = object(
  { payoutId: ['payout_id', optional(nullable(string()))] }
);
