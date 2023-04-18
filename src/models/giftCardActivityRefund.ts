import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents details about a `REFUND` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityRefund {
  /**
   * The ID of the refunded `REDEEM` gift card activity. Square populates this field if the
   * `payment_id` in the corresponding [RefundPayment](api-endpoint:Refunds-RefundPayment) request
   * represents a redemption made by the same gift card. Note that you must use `RefundPayment`
   * to refund a gift card payment to the same gift card if the payment was processed by Square.
   * For applications that use a custom payment processing system, this field is required when creating
   * a `REFUND` activity. The provided `REDEEM` activity ID must be linked to the same gift card.
   */
  redeemActivityId?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney?: Money;
  /** A client-specified ID that associates the gift card activity with an entity in another system. */
  referenceId?: string | null;
  /**
   * The ID of the refunded payment. Square populates this field if the refund is for a
   * payment processed by Square and one of the following conditions is true:
   * - The Refunds API is used to refund a gift card payment to the same gift card.
   * - A seller initiated the refund from Square Point of Sale or the Seller Dashboard. The payment source can be the
   * same gift card or a cross-tender payment from a credit card or a different gift card.
   */
  paymentId?: string;
}

export const giftCardActivityRefundSchema: Schema<GiftCardActivityRefund> = object(
  {
    redeemActivityId: ['redeem_activity_id', optional(nullable(string()))],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    referenceId: ['reference_id', optional(nullable(string()))],
    paymentId: ['payment_id', optional(string())],
  }
);
