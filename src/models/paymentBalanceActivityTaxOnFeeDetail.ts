import { object, optional, Schema, string } from '../schema';

export interface PaymentBalanceActivityTaxOnFeeDetail {
  /** The ID of the payment associated with this activity. */
  paymentId?: string;
  /** The description of the tax rate being applied. For example: "GST", "HST". */
  taxRateDescription?: string;
}

export const paymentBalanceActivityTaxOnFeeDetailSchema: Schema<PaymentBalanceActivityTaxOnFeeDetail> = object(
  {
    paymentId: ['payment_id', optional(string())],
    taxRateDescription: ['tax_rate_description', optional(string())],
  }
);
