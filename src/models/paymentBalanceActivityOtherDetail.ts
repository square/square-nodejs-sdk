import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityOtherDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivityOtherDetailSchema: Schema<PaymentBalanceActivityOtherDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
