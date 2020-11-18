import {
  array,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';
import { OrderFulfillment, orderFulfillmentSchema } from './orderFulfillment';
import { OrderLineItem, orderLineItemSchema } from './orderLineItem';
import {
  OrderLineItemDiscount,
  orderLineItemDiscountSchema,
} from './orderLineItemDiscount';
import { OrderLineItemTax, orderLineItemTaxSchema } from './orderLineItemTax';
import {
  OrderMoneyAmounts,
  orderMoneyAmountsSchema,
} from './orderMoneyAmounts';
import {
  OrderPricingOptions,
  orderPricingOptionsSchema,
} from './orderPricingOptions';
import { OrderReturn, orderReturnSchema } from './orderReturn';
import { OrderReward, orderRewardSchema } from './orderReward';
import {
  OrderRoundingAdjustment,
  orderRoundingAdjustmentSchema,
} from './orderRoundingAdjustment';
import {
  OrderServiceCharge,
  orderServiceChargeSchema,
} from './orderServiceCharge';
import { OrderSource, orderSourceSchema } from './orderSource';
import { Refund, refundSchema } from './refund';
import { Tender, tenderSchema } from './tender';

/**
 * Contains all information related to a single order to process with Square,
 * including line items that specify the products to purchase. Order objects also
 * include information on any associated tenders, refunds, and returns.
 * All Connect V2 Transactions have all been converted to Orders including all associated
 * itemization data.
 */
export interface Order {
  /** The order's unique ID. */
  id?: string;
  /** The ID of the merchant location this order is associated with. */
  locationId: string;
  /**
   * A client specified identifier to associate an entity in another system
   * with this order.
   */
  referenceId?: string;
  /** Represents the origination details of an order. */
  source?: OrderSource;
  /** The [Customer](#type-customer) ID of the customer associated with the order. */
  customerId?: string;
  /** The line items included in the order. */
  lineItems?: OrderLineItem[];
  /**
   * The list of all taxes associated with the order.
   * Taxes can be scoped to either `ORDER` or `LINE_ITEM`. For taxes with `LINE_ITEM` scope, an
   * `OrderLineItemAppliedTax` must be added to each line item that the tax applies to. For taxes
   * with `ORDER` scope, the server will generate an `OrderLineItemAppliedTax` for every line item.
   * On reads, each tax in the list will include the total amount of that tax applied to the order.
   * __IMPORTANT__: If `LINE_ITEM` scope is set on any taxes in this field, usage of the deprecated
   * `line_items.taxes` field will result in an error. Please use `line_items.applied_taxes`
   * instead.
   */
  taxes?: OrderLineItemTax[];
  /**
   * The list of all discounts associated with the order.
   * Discounts can be scoped to either `ORDER` or `LINE_ITEM`. For discounts scoped to `LINE_ITEM`,
   * an `OrderLineItemAppliedDiscount` must be added to each line item that the discount applies to.
   * For discounts with `ORDER` scope, the server will generate an `OrderLineItemAppliedDiscount`
   * for every line item.
   * __IMPORTANT__: If `LINE_ITEM` scope is set on any discounts in this field, usage of the deprecated
   * `line_items.discounts` field will result in an error. Please use `line_items.applied_discounts`
   * instead.
   */
  discounts?: OrderLineItemDiscount[];
  /** A list of service charges applied to the order. */
  serviceCharges?: OrderServiceCharge[];
  /**
   * Details on order fulfillment.
   * Orders can only be created with at most one fulfillment. However, orders returned
   * by the API may contain multiple fulfillments.
   */
  fulfillments?: OrderFulfillment[];
  /**
   * Collection of items from sale Orders being returned in this one. Normally part of an
   * Itemized Return or Exchange.  There will be exactly one `Return` object per sale Order being
   * referenced.
   */
  returns?: OrderReturn[];
  /** A collection of various money amounts. */
  returnAmounts?: OrderMoneyAmounts;
  /** A collection of various money amounts. */
  netAmounts?: OrderMoneyAmounts;
  /**
   * A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding
   * when the minimum unit of account is smaller than the lowest physical denomination of currency.
   */
  roundingAdjustment?: OrderRoundingAdjustment;
  /** The Tenders which were used to pay for the Order. */
  tenders?: Tender[];
  /** The Refunds that are part of this Order. */
  refunds?: Refund[];
  /**
   * Application-defined data attached to this order. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (personally
   * identifiable information, card details, etc.).
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries may also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   * Values have a max length of 255 characters.
   * An application may have up to 10 entries per metadata field.
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   * See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
   */
  metadata?: Record<string, string>;
  /** Timestamp for when the order was created. In RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
  createdAt?: string;
  /** Timestamp for when the order was last updated. In RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
  updatedAt?: string;
  /** Timestamp for when the order reached a terminal [state](#property-state). In RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
  closedAt?: string;
  /** The state of the order. */
  state?: string;
  /**
   * Version number which is incremented each time an update is committed to the order.
   * Orders that were not created through the API will not include a version and
   * thus cannot be updated.
   * [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders).
   */
  version?: number;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalTaxMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalDiscountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalTipMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalServiceChargeMoney?: Money;
  /**
   * Pricing options for an order. The options affect how the order's price is calculated.
   * They can be used, for example, to apply automatic price adjustments that are based on pre-configured
   * [pricing rules](https://developer.squareup.com/docs/reference/square/objects/CatalogPricingRule).
   */
  pricingOptions?: OrderPricingOptions;
  /** A set-like list of rewards that have been added to the order. */
  rewards?: OrderReward[];
}

export const orderSchema: Schema<Order> = object({
  id: ['id', optional(string())],
  locationId: ['location_id', string()],
  referenceId: ['reference_id', optional(string())],
  source: ['source', optional(lazy(() => orderSourceSchema))],
  customerId: ['customer_id', optional(string())],
  lineItems: ['line_items', optional(array(lazy(() => orderLineItemSchema)))],
  taxes: ['taxes', optional(array(lazy(() => orderLineItemTaxSchema)))],
  discounts: [
    'discounts',
    optional(array(lazy(() => orderLineItemDiscountSchema))),
  ],
  serviceCharges: [
    'service_charges',
    optional(array(lazy(() => orderServiceChargeSchema))),
  ],
  fulfillments: [
    'fulfillments',
    optional(array(lazy(() => orderFulfillmentSchema))),
  ],
  returns: ['returns', optional(array(lazy(() => orderReturnSchema)))],
  returnAmounts: [
    'return_amounts',
    optional(lazy(() => orderMoneyAmountsSchema)),
  ],
  netAmounts: ['net_amounts', optional(lazy(() => orderMoneyAmountsSchema))],
  roundingAdjustment: [
    'rounding_adjustment',
    optional(lazy(() => orderRoundingAdjustmentSchema)),
  ],
  tenders: ['tenders', optional(array(lazy(() => tenderSchema)))],
  refunds: ['refunds', optional(array(lazy(() => refundSchema)))],
  metadata: ['metadata', optional(dict(string()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  closedAt: ['closed_at', optional(string())],
  state: ['state', optional(string())],
  version: ['version', optional(number())],
  totalMoney: ['total_money', optional(lazy(() => moneySchema))],
  totalTaxMoney: ['total_tax_money', optional(lazy(() => moneySchema))],
  totalDiscountMoney: [
    'total_discount_money',
    optional(lazy(() => moneySchema)),
  ],
  totalTipMoney: ['total_tip_money', optional(lazy(() => moneySchema))],
  totalServiceChargeMoney: [
    'total_service_charge_money',
    optional(lazy(() => moneySchema)),
  ],
  pricingOptions: [
    'pricing_options',
    optional(lazy(() => orderPricingOptionsSchema)),
  ],
  rewards: ['rewards', optional(array(lazy(() => orderRewardSchema)))],
});
