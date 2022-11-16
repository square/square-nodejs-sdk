import { nullable, number, object, optional, Schema, string } from '../schema';

export interface V1Money {
  /**
   * Amount in the lowest denominated value of this Currency. E.g. in USD
   * these are cents, in JPY they are Yen (which do not have a 'cent' concept).
   */
  amount?: number | null;
  /**
   * Indicates the associated currency for an amount of money. Values correspond
   * to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
   */
  currencyCode?: string;
}

export const v1MoneySchema: Schema<V1Money> = object({
  amount: ['amount', optional(nullable(number()))],
  currencyCode: ['currency_code', optional(string())],
});
