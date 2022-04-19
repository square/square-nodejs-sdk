import { object, optional, Schema, string } from '../schema';

/** DESCRIPTION OF PaymentBalanceActivityChargeDetail */
export interface PaymentBalanceActivityChargeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivityChargeDetailSchema: Schema<PaymentBalanceActivityChargeDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
