import { lazy, object, optional, Schema } from '../schema';
import { Money, moneySchema } from './money';

/** Represents the details of a tender with `type` `CASH`. */
export interface TenderCashDetails {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  buyerTenderedMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  changeBackMoney?: Money;
}

export const tenderCashDetailsSchema: Schema<TenderCashDetails> = object({
  buyerTenderedMoney: [
    'buyer_tendered_money',
    optional(lazy(() => moneySchema)),
  ],
  changeBackMoney: ['change_back_money', optional(lazy(() => moneySchema))],
});
