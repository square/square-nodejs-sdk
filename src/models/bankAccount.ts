import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/**
 * Represents a bank account. For more information about
 * linking a bank account to a Square account, see
 * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
 */
export interface BankAccount {
  /** The unique, Square-issued identifier for the bank account. */
  id: string;
  /** The last few digits of the account number. */
  accountNumberSuffix: string;
  /**
   * Indicates the country associated with another entity, such as a business.
   * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country: string;
  /**
   * Indicates the associated currency for an amount of money. Values correspond
   * to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
   */
  currency: string;
  /** Indicates the financial purpose of the bank account. */
  accountType: string;
  /**
   * Name of the account holder. This name must match the name
   * on the targeted bank account record.
   */
  holderName: string;
  /**
   * Primary identifier for the bank. For more information, see
   * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
   */
  primaryBankIdentificationNumber: string;
  /**
   * Secondary identifier for the bank. For more information, see
   * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
   */
  secondaryBankIdentificationNumber?: string | null;
  /**
   * Reference identifier that will be displayed to UK bank account owners
   * when collecting direct debit authorization. Only required for UK bank accounts.
   */
  debitMandateReferenceId?: string | null;
  /**
   * Client-provided identifier for linking the banking account to an entity
   * in a third-party system (for example, a bank account number or a user identifier).
   */
  referenceId?: string | null;
  /** The location to which the bank account belongs. */
  locationId?: string | null;
  /** Indicates the current verification status of a `BankAccount` object. */
  status: string;
  /** Indicates whether it is possible for Square to send money to this bank account. */
  creditable: boolean;
  /**
   * Indicates whether it is possible for Square to take money from this
   * bank account.
   */
  debitable: boolean;
  /**
   * A Square-assigned, unique identifier for the bank account based on the
   * account information. The account fingerprint can be used to compare account
   * entries and determine if the they represent the same real-world bank account.
   */
  fingerprint?: string | null;
  /** The current version of the `BankAccount`. */
  version?: number;
  /**
   * Read only. Name of actual financial institution.
   * For example "Bank of America".
   */
  bankName?: string | null;
}

export const bankAccountSchema: Schema<BankAccount> = object({
  id: ['id', string()],
  accountNumberSuffix: ['account_number_suffix', string()],
  country: ['country', string()],
  currency: ['currency', string()],
  accountType: ['account_type', string()],
  holderName: ['holder_name', string()],
  primaryBankIdentificationNumber: [
    'primary_bank_identification_number',
    string(),
  ],
  secondaryBankIdentificationNumber: [
    'secondary_bank_identification_number',
    optional(nullable(string())),
  ],
  debitMandateReferenceId: [
    'debit_mandate_reference_id',
    optional(nullable(string())),
  ],
  referenceId: ['reference_id', optional(nullable(string()))],
  locationId: ['location_id', optional(nullable(string()))],
  status: ['status', string()],
  creditable: ['creditable', boolean()],
  debitable: ['debitable', boolean()],
  fingerprint: ['fingerprint', optional(nullable(string()))],
  version: ['version', optional(number())],
  bankName: ['bank_name', optional(nullable(string()))],
});
