import { array, lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Describes a gift card activity of the ACTIVATE type. */
export interface GiftCardActivityActivate {
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
   * The ID of the order associated with the activity.
   * This is required if your application uses the Square Orders API.
   */
  orderId?: string;
  /**
   * The `line_item_uid` of the gift card line item in an order.
   * This is required if your application uses the Square Orders API.
   */
  lineItemUid?: string;
  /**
   * If your application does not use the Square Orders API, you can optionally use this field
   * to associate the gift card activity with a client-side entity.
   */
  referenceId?: string;
  /**
   * Required if your application does not use the Square Orders API.
   * This is a list of client-provided payment instrument IDs.
   * Square uses this information to perform compliance checks.
   * If you use the Square Orders API, Square has the necessary instrument IDs to perform necessary
   * compliance checks.
   */
  buyerPaymentInstrumentIds?: string[];
}

export const giftCardActivityActivateSchema: Schema<GiftCardActivityActivate> = object(
  {
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    orderId: ['order_id', optional(string())],
    lineItemUid: ['line_item_uid', optional(string())],
    referenceId: ['reference_id', optional(string())],
    buyerPaymentInstrumentIds: [
      'buyer_payment_instrument_ids',
      optional(array(string())),
    ],
  }
);
