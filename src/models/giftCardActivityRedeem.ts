import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Present only when `GiftCardActivityType` is REDEEM. */
export interface GiftCardActivityRedeem {
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
   * When the Square Payments API is used, Redeem is not called on the Gift Cards API.
   * However, when Square reads a Redeem activity from the Gift Cards API, developers need to know the
   * associated `payment_id`.
   */
  paymentId?: string;
  /**
   * A client-specified ID to associate an entity, in another system, with this gift card
   * activity. This can be used to track the order or payment related information when the Square Orders
   * API is not being used.
   */
  referenceId?: string;
}

export const giftCardActivityRedeemSchema: Schema<GiftCardActivityRedeem> = object(
  {
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    paymentId: ['payment_id', optional(string())],
    referenceId: ['reference_id', optional(string())],
  }
);
