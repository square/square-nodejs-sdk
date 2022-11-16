import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents details about an `UNLINKED_ACTIVITY_REFUND` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityUnlinkedActivityRefund {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
  /** A client-specified ID that associates the gift card activity with an entity in another system. */
  referenceId?: string | null;
  /** The ID of the refunded payment. This field is not used starting in Square version 2022-06-16. */
  paymentId?: string;
}

export const giftCardActivityUnlinkedActivityRefundSchema: Schema<GiftCardActivityUnlinkedActivityRefund> = object(
  {
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    referenceId: ['reference_id', optional(nullable(string()))],
    paymentId: ['payment_id', optional(string())],
  }
);
