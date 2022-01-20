import { array, lazy, object, optional, Schema } from '../schema';
import { BankAccount, bankAccountSchema } from './bankAccount';
import { Error, errorSchema } from './error';

/** Response object returned by `GetBankAccount`. */
export interface GetBankAccountResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  bankAccount?: BankAccount;
}

export const getBankAccountResponseSchema: Schema<GetBankAccountResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    bankAccount: ['bank_account', optional(lazy(() => bankAccountSchema))],
  }
);
