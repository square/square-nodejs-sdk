import { lazy, object, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Describes a gift card activity of the ADJUST_DECREMENT type. */
export interface GiftCardActivityAdjustDecrement {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
  reason: string;
}

export const giftCardActivityAdjustDecrementSchema: Schema<GiftCardActivityAdjustDecrement> = object(
  {
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    reason: ['reason', string()],
  }
);
