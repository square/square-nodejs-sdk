import { lazy, object, Schema } from '../schema';
import { Money, moneySchema } from './money';

/**
 * Describes a gift card activity of the IMPORT type and the `GiftCardGANSource` is OTHER
 * (a third-party gift card).
 */
export interface GiftCardActivityImport {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
}

export const giftCardActivityImportSchema: Schema<GiftCardActivityImport> = object(
  { amountMoney: ['amount_money', lazy(() => moneySchema)] }
);
