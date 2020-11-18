import { object, optional, Schema, string } from '../schema';

/** V1BankAccount */
export interface V1BankAccount {
  /** The bank account's Square-issued ID. */
  id?: string;
  /** The Square-issued ID of the merchant associated with the bank account. */
  merchantId?: string;
  /** The name of the bank that manages the account. */
  bankName?: string;
  /** The name associated with the bank account. */
  name?: string;
  /** The bank account's routing number. */
  routingNumber?: string;
  /** The last few digits of the bank account number. */
  accountNumberSuffix?: string;
  /** The currency code of the currency associated with the bank account, in ISO 4217 format. For example, the currency code for US dollars is USD. */
  currencyCode?: string;
  type?: string;
}

export const v1BankAccountSchema: Schema<V1BankAccount> = object({
  id: ['id', optional(string())],
  merchantId: ['merchant_id', optional(string())],
  bankName: ['bank_name', optional(string())],
  name: ['name', optional(string())],
  routingNumber: ['routing_number', optional(string())],
  accountNumberSuffix: ['account_number_suffix', optional(string())],
  currencyCode: ['currency_code', optional(string())],
  type: ['type', optional(string())],
});
