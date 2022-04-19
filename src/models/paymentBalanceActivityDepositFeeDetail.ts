import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityDepositFeeDetail {
  /** The ID of the payout that triggered this deposit fee activity. */
  payoutId?: string;
}

export const paymentBalanceActivityDepositFeeDetailSchema: Schema<PaymentBalanceActivityDepositFeeDetail> = object(
  { payoutId: ['payout_id', optional(string())] }
);
