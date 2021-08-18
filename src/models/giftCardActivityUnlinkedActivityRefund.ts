import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Present only when `GiftCardActivityType` is UNLINKED_ACTIVITY_REFUND. */
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
  /**
   * A client-specified ID to associate an entity, in another system, with this gift card
   * activity. This can be used to track the order or payment related information when the Square Payments
   * API is not being used.
   */
  referenceId?: string;
  /**
   * When using the Square Payments API, the ID of the payment that was refunded to this gift
   * card.
   */
  paymentId?: string;
}

export const giftCardActivityUnlinkedActivityRefundSchema: Schema<GiftCardActivityUnlinkedActivityRefund> = object(
  {
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    referenceId: ['reference_id', optional(string())],
    paymentId: ['payment_id', optional(string())],
  }
);
