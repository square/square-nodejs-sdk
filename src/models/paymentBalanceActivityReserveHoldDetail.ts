import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityReserveHoldDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivityReserveHoldDetailSchema: Schema<PaymentBalanceActivityReserveHoldDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
