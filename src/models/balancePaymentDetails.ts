import { object, optional, Schema, string } from '../schema';

/** Reflects the current status of a balance payment. */
export interface BalancePaymentDetails {
  /** The ID of the account used to fund the payment. */
  accountId?: string;
  /** The balance payment’s current state. The state can be COMPLETED or FAILED. */
  status?: string;
}

export const balancePaymentDetailsSchema: Schema<BalancePaymentDetails> = object(
  {
    accountId: ['account_id', optional(string())],
    status: ['status', optional(string())],
  }
);
