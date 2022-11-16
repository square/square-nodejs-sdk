import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityAutomaticSavingsReversedDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the payout associated with this activity. */
  payoutId?: string | null;
}

export const paymentBalanceActivityAutomaticSavingsReversedDetailSchema: Schema<PaymentBalanceActivityAutomaticSavingsReversedDetail> = object(
  {
    paymentId: ['payment_id', optional(nullable(string()))],
    payoutId: ['payout_id', optional(nullable(string()))],
  }
);
