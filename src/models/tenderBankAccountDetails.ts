import { object, optional, Schema, string } from '../schema';

/**
 * Represents the details of a tender with `type` `BANK_ACCOUNT`.
 * See [BankAccountPaymentDetails]($m/BankAccountPaymentDetails)
 * for more exposed details of a bank account payment.
 */
export interface TenderBankAccountDetails {
  /** Indicates the bank account payment's current status. */
  status?: string;
}

export const tenderBankAccountDetailsSchema: Schema<TenderBankAccountDetails> = object(
  { status: ['status', optional(string())] }
);
