import { array, lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Present only when `GiftCardActivityType` is LOAD. */
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
   * The `order_id` of the order associated with the activity.
   * It is populated along with `line_item_uid` and is required if using the Square Orders API.
   */
  orderId?: string;
  /**
   * The `line_item_uid` of the gift card’s line item in the order associated with the activity.
   * It is populated along with `order_id` and is required if using the Square Orders API.
   */
  lineItemUid?: string;
  /**
   * A client-specified ID to associate an entity, in another system, with this gift card
   * activity. This can be used to track the order or payment related information when the Square Orders
   * API is not being used.
   */
  referenceId?: string;
  /**
   * If you are not using the Orders API, this field is required because it is used to identify a buyer
   * to perform compliance checks.
   */
  buyerPaymentInstrumentIds?: string[];
}

export const giftCardActivityLoadSchema: Schema<GiftCardActivityLoad> = object({
  amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
  orderId: ['order_id', optional(string())],
  lineItemUid: ['line_item_uid', optional(string())],
  referenceId: ['reference_id', optional(string())],
  buyerPaymentInstrumentIds: [
    'buyer_payment_instrument_ids',
    optional(array(string())),
  ],
});
