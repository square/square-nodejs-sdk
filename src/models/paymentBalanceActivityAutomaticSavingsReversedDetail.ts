import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityAutomaticSavingsReversedDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
  /** The ID of the payout associated with this activity. */
  payoutId?: string;
}

export const paymentBalanceActivityAutomaticSavingsReversedDetailSchema: Schema<PaymentBalanceActivityAutomaticSavingsReversedDetail> = object(
  {
    paymentId: ['payment_id', optional(string())],
    payoutId: ['payout_id', optional(string())],
  }
);
