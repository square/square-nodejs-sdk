import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents details about a `REDEEM` [gift card activity type]($m/GiftCardActivityType). */
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
   * The ID of the payment that represents the gift card redemption. Square populates this field
   * if the payment was processed by Square.
   */
  paymentId?: string;
  /**
   * A client-specified ID that associates the gift card activity with an entity in another system.
   * Applications that use a custom payment processing system can use this field to track information
   * related to an order or payment.
   */
  referenceId?: string | null;
  /**
   * Indicates the status of a [gift card]($m/GiftCard) redemption. This status is relevant only for
   * redemptions made from Square products (such as Square Point of Sale) because Square products use a
   * two-state process. Gift cards redeemed using the Gift Card Activities API always have a `COMPLETED` status.
   */
  status?: string;
}

export const giftCardActivityRedeemSchema: Schema<GiftCardActivityRedeem> = object(
  {
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    paymentId: ['payment_id', optional(string())],
    referenceId: ['reference_id', optional(nullable(string()))],
    status: ['status', optional(string())],
  }
);
