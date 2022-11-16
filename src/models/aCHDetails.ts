import { nullable, object, optional, Schema, string } from '../schema';

/** ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`. */
export interface ACHDetails {
  /** The routing number for the bank account. */
  routingNumber?: string | null;
  /** The last few digits of the bank account number. */
  accountNumberSuffix?: string | null;
  /**
   * The type of the bank account performing the transfer. The account type can be `CHECKING`,
   * `SAVINGS`, or `UNKNOWN`.
   */
  accountType?: string | null;
}

export const aCHDetailsSchema: Schema<ACHDetails> = object({
  routingNumber: ['routing_number', optional(nullable(string()))],
  accountNumberSuffix: ['account_number_suffix', optional(nullable(string()))],
  accountType: ['account_type', optional(nullable(string()))],
});
