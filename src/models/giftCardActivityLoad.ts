import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';

/** Represents details about a `LOAD` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityLoad {
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
   * The ID of the [order](entity:Order) that contains the `GIFT_CARD` line item.
   * Applications that use the Square Orders API to process orders must specify the order ID in the
   * [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   */
  orderId?: string | null;
  /**
   * The UID of the `GIFT_CARD` line item in the order that represents the additional funds for the gift card.
   * Applications that use the Square Orders API to process orders must specify the line item UID
   * in the [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   */
  lineItemUid?: string | null;
  /**
   * A client-specified ID that associates the gift card activity with an entity in another system.
   * Applications that use a custom order processing system can use this field to track information related to
   * an order or payment.
   */
  referenceId?: string | null;
  /**
   * The payment instrument IDs used to process the order for the additional funds, such as a credit card ID
   * or bank account ID.
   * Applications that use a custom order processing system must specify payment instrument IDs in
   * the [CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) request.
   * Square uses this information to perform compliance checks.
   * For applications that use the Square Orders API to process payments, Square has the necessary
   * instrument IDs to perform compliance checks.
   * Each buyer payment instrument ID can contain a maximum of 255 characters.
   */
  buyerPaymentInstrumentIds?: string[] | null;
}

export const giftCardActivityLoadSchema: Schema<GiftCardActivityLoad> = object({
  amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
  orderId: ['order_id', optional(nullable(string()))],
  lineItemUid: ['line_item_uid', optional(nullable(string()))],
  referenceId: ['reference_id', optional(nullable(string()))],
  buyerPaymentInstrumentIds: [
    'buyer_payment_instrument_ids',
    optional(nullable(array(string()))),
  ],
});
