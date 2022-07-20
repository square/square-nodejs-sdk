import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents details about a `REFUND` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityRefund {
  /**
   * The ID of the refunded `REDEEM` gift card activity. Square populates this field if the
   * `payment_id` in the corresponding [RefundPayment]($e/Refunds/RefundPayment) request
   * represents a redemption made by the same gift card. Note that you must use `RefundPayment` when refunding a
   * gift card payment made using the Payments API, Square Point of Sale, or the Seller Dashboard to the same gift card.
   * Applications that use a custom payment processing system can use this field in a
   * [CreateGiftCardActivity]($e/GiftCardActivities/CreateGiftCardActivity)
   * request to link a refund with a `REDEEM` activity for the same gift card.
   */
  redeemActivityId?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney?: Money;
  /**
   * A client-specified ID that associates the gift card activity with an order, payment, or other entity.
   * This field can be used to track information related to Square entities or entities in another system.
   */
  referenceId?: string;
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
    redeemActivityId: ['redeem_activity_id', optional(string())],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    referenceId: ['reference_id', optional(string())],
    paymentId: ['payment_id', optional(string())],
  }
);
