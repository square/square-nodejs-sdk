import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityOpenDisputeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the dispute associated with this activity. */
  disputeId?: string | null;
}

export const paymentBalanceActivityOpenDisputeDetailSchema: Schema<PaymentBalanceActivityOpenDisputeDetail> = object(
  {
    paymentId: ['payment_id', optional(nullable(string()))],
    disputeId: ['dispute_id', optional(nullable(string()))],
  }
);
