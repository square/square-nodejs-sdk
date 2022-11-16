import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Address, addressSchema } from './address';
import { Error, errorSchema } from './error';
import { V1Money, v1MoneySchema } from './v1Money';
import {
  V1OrderHistoryEntry,
  v1OrderHistoryEntrySchema,
} from './v1OrderHistoryEntry';
import { V1Tender, v1TenderSchema } from './v1Tender';

/** V1Order */
export interface V1Order {
  /** Any errors that occurred during the request. */
  errors?: Error[] | null;
  /** The order's unique identifier. */
  id?: string;
  /** The email address of the order's buyer. */
  buyerEmail?: string | null;
  /** The name of the order's buyer. */
  recipientName?: string | null;
  /** The phone number to use for the order's delivery. */
  recipientPhoneNumber?: string | null;
  state?: string;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  shippingAddress?: Address;
  subtotalMoney?: V1Money;
  totalShippingMoney?: V1Money;
  totalTaxMoney?: V1Money;
  totalPriceMoney?: V1Money;
  totalDiscountMoney?: V1Money;
  /** The time when the order was created, in ISO 8601 format. */
  createdAt?: string;
  /** The time when the order was last modified, in ISO 8601 format. */
  updatedAt?: string;
  /** The time when the order expires if no action is taken, in ISO 8601 format. */
  expiresAt?: string | null;
  /** The unique identifier of the payment associated with the order. */
  paymentId?: string | null;
  /** A note provided by the buyer when the order was created, if any. */
  buyerNote?: string | null;
  /** A note provided by the merchant when the order's state was set to COMPLETED, if any */
  completedNote?: string | null;
  /** A note provided by the merchant when the order's state was set to REFUNDED, if any. */
  refundedNote?: string | null;
  /** A note provided by the merchant when the order's state was set to CANCELED, if any. */
  canceledNote?: string | null;
  /**
   * A tender represents a discrete monetary exchange. Square represents this
   * exchange as a money object with a specific currency and amount, where the
   * amount is given in the smallest denomination of the given currency.
   * Square POS can accept more than one form of tender for a single payment (such
   * as by splitting a bill between a credit card and a gift card). The `tender`
   * field of the Payment object lists all forms of tender used for the payment.
   * Split tender payments behave slightly differently from single tender payments:
   * The receipt_url for a split tender corresponds only to the first tender listed
   * in the tender field. To get the receipt URLs for the remaining tenders, use
   * the receipt_url fields of the corresponding Tender objects.
   * *A note on gift cards**: when a customer purchases a Square gift card from a
   * merchant, the merchant receives the full amount of the gift card in the
   * associated payment.
   * When that gift card is used as a tender, the balance of the gift card is
   * reduced and the merchant receives no funds. A `Tender` object with a type of
   * `SQUARE_GIFT_CARD` indicates a gift card was used for some or all of the
   * associated payment.
   */
  tender?: V1Tender;
  /** The history of actions associated with the order. */
  orderHistory?: V1OrderHistoryEntry[] | null;
  /** The promo code provided by the buyer, if any. */
  promoCode?: string | null;
  /** For Bitcoin transactions, the address that the buyer sent Bitcoin to. */
  btcReceiveAddress?: string | null;
  /** For Bitcoin transactions, the price of the buyer's order in satoshi (100 million satoshi equals 1 BTC). */
  btcPriceSatoshi?: number | null;
}

export const v1OrderSchema: Schema<V1Order> = object({
  errors: ['errors', optional(nullable(array(lazy(() => errorSchema))))],
  id: ['id', optional(string())],
  buyerEmail: ['buyer_email', optional(nullable(string()))],
  recipientName: ['recipient_name', optional(nullable(string()))],
  recipientPhoneNumber: [
    'recipient_phone_number',
    optional(nullable(string())),
  ],
  state: ['state', optional(string())],
  shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
  subtotalMoney: ['subtotal_money', optional(lazy(() => v1MoneySchema))],
  totalShippingMoney: [
    'total_shipping_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  totalTaxMoney: ['total_tax_money', optional(lazy(() => v1MoneySchema))],
  totalPriceMoney: ['total_price_money', optional(lazy(() => v1MoneySchema))],
  totalDiscountMoney: [
    'total_discount_money',
    optional(lazy(() => v1MoneySchema)),
  ],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  expiresAt: ['expires_at', optional(nullable(string()))],
  paymentId: ['payment_id', optional(nullable(string()))],
  buyerNote: ['buyer_note', optional(nullable(string()))],
  completedNote: ['completed_note', optional(nullable(string()))],
  refundedNote: ['refunded_note', optional(nullable(string()))],
  canceledNote: ['canceled_note', optional(nullable(string()))],
  tender: ['tender', optional(lazy(() => v1TenderSchema))],
  orderHistory: [
    'order_history',
    optional(nullable(array(lazy(() => v1OrderHistoryEntrySchema)))),
  ],
  promoCode: ['promo_code', optional(nullable(string()))],
  btcReceiveAddress: ['btc_receive_address', optional(nullable(string()))],
  btcPriceSatoshi: ['btc_price_satoshi', optional(nullable(number()))],
});
