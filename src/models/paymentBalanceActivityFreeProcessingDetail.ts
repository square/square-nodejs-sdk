import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityFreeProcessingDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivityFreeProcessingDetailSchema: Schema<PaymentBalanceActivityFreeProcessingDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
