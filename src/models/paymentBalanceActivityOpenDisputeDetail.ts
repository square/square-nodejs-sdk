import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityOpenDisputeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
  /** The ID of the dispute associated with this activity. */
  disputeId?: string;
}

export const paymentBalanceActivityOpenDisputeDetailSchema: Schema<PaymentBalanceActivityOpenDisputeDetail> = object(
  {
    paymentId: ['payment_id', optional(string())],
    disputeId: ['dispute_id', optional(string())],
  }
);
