import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityDisputeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the dispute associated with this activity. */
  disputeId?: string | null;
}

export const paymentBalanceActivityDisputeDetailSchema: Schema<PaymentBalanceActivityDisputeDetail> = object(
  {
    paymentId: ['payment_id', optional(nullable(string()))],
    disputeId: ['dispute_id', optional(nullable(string()))],
  }
);
