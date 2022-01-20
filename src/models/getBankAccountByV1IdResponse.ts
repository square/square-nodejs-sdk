import { array, lazy, object, optional, Schema } from '../schema';
import { BankAccount, bankAccountSchema } from './bankAccount';
import { Error, errorSchema } from './error';

/** Response object returned by GetBankAccountByV1Id. */
export interface GetBankAccountByV1IdResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  bankAccount?: BankAccount;
}

export const getBankAccountByV1IdResponseSchema: Schema<GetBankAccountByV1IdResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    bankAccount: ['bank_account', optional(lazy(() => bankAccountSchema))],
  }
);
