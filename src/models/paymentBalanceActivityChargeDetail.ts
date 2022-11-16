import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityChargeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivityChargeDetailSchema: Schema<PaymentBalanceActivityChargeDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
