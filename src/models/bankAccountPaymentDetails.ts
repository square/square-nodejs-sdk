import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { ACHDetails, aCHDetailsSchema } from './aCHDetails';
import { Error, errorSchema } from './error';

/** Additional details about BANK_ACCOUNT type payments. */
export interface BankAccountPaymentDetails {
  /** The name of the bank associated with the bank account. */
  bankName?: string | null;
  /** The type of the bank transfer. The type can be `ACH` or `UNKNOWN`. */
  transferType?: string | null;
  /**
   * The ownership type of the bank account performing the transfer.
   * The type can be `INDIVIDUAL`, `COMPANY`, or `ACCOUNT_TYPE_UNKNOWN`.
   */
  accountOwnershipType?: string | null;
  /**
   * Uniquely identifies the bank account for this seller and can be used
   * to determine if payments are from the same bank account.
   */
  fingerprint?: string | null;
  /** The two-letter ISO code representing the country the bank account is located in. */
  country?: string | null;
  /** The statement description as sent to the bank. */
  statementDescription?: string | null;
  /** ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`. */
  achDetails?: ACHDetails;
  /** Information about errors encountered during the request. */
  errors?: Error[] | null;
}

export const bankAccountPaymentDetailsSchema: Schema<BankAccountPaymentDetails> = object(
  {
    bankName: ['bank_name', optional(nullable(string()))],
    transferType: ['transfer_type', optional(nullable(string()))],
    accountOwnershipType: [
      'account_ownership_type',
      optional(nullable(string())),
    ],
    fingerprint: ['fingerprint', optional(nullable(string()))],
    country: ['country', optional(nullable(string()))],
    statementDescription: [
      'statement_description',
      optional(nullable(string())),
    ],
    achDetails: ['ach_details', optional(lazy(() => aCHDetailsSchema))],
    errors: ['errors', optional(nullable(array(lazy(() => errorSchema))))],
  }
);
