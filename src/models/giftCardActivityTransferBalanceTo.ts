import { lazy, object, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents details about a `TRANSFER_BALANCE_TO` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityTransferBalanceTo {
  /** The ID of the gift card from which the specified amount was transferred. */
  transferFromGiftCardId: string;
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

export const giftCardActivityTransferBalanceToSchema: Schema<GiftCardActivityTransferBalanceTo> = object(
  {
    transferFromGiftCardId: ['transfer_from_gift_card_id', string()],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
  }
);
