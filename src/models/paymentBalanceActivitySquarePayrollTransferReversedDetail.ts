import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivitySquarePayrollTransferReversedDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
}

export const paymentBalanceActivitySquarePayrollTransferReversedDetailSchema: Schema<PaymentBalanceActivitySquarePayrollTransferReversedDetail> = object(
  { paymentId: ['payment_id', optional(nullable(string()))] }
);
