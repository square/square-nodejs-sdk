import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding
 * when the minimum unit of account is smaller than the lowest physical denomination of currency.
 */
export interface OrderRoundingAdjustment {
  /** Unique ID that identifies the rounding adjustment only within this order. */
  uid?: string;
  /** The name of the rounding adjustment from the original sale Order. */
  name?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney?: Money;
}

export const orderRoundingAdjustmentSchema: Schema<OrderRoundingAdjustment> = object(
  {
    uid: ['uid', optional(string())],
    name: ['name', optional(string())],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
  }
);
