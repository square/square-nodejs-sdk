import { array, lazy, object, optional, Schema } from '../schema';
import { V1BankAccount, v1BankAccountSchema } from './v1BankAccount';

export interface V1ListBankAccountsResponse {
  items?: V1BankAccount[];
}

export const v1ListBankAccountsResponseSchema: Schema<V1ListBankAccountsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1BankAccountSchema)))] }
);
