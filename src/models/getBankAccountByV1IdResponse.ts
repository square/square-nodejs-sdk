import { array, lazy, object, optional, Schema } from '../schema';
import { BankAccount, bankAccountSchema } from './bankAccount';
import { Error, errorSchema } from './error';

/** Response object returned by GetBankAccountByV1Id. */
export interface GetBankAccountByV1IdResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a bank account. For more information about
   * linking a bank account to a Square account, see
   * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
   */
  bankAccount?: BankAccount;
}

export const getBankAccountByV1IdResponseSchema: Schema<GetBankAccountByV1IdResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    bankAccount: ['bank_account', optional(lazy(() => bankAccountSchema))],
  }
);
