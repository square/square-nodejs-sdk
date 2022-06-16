import { lazy, object, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents details about an `ADJUST_INCREMENT` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityAdjustIncrement {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
  /** Indicates the reason for adding money to a [gift card]($m/GiftCard). */
  reason: string;
}

export const giftCardActivityAdjustIncrementSchema: Schema<GiftCardActivityAdjustIncrement> = object(
  {
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    reason: ['reason', string()],
  }
);
