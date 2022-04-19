import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityReserveReleaseDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
}

export const paymentBalanceActivityReserveReleaseDetailSchema: Schema<PaymentBalanceActivityReserveReleaseDetail> = object(
  { paymentId: ['payment_id', optional(string())] }
);
