import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivitySquarePayrollTransferDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivitySquarePayrollTransferDetailSchema: Schema<PaymentBalanceActivitySquarePayrollTransferDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
