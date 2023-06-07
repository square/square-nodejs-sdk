import {
  array,
  dict,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Fulfillment, fulfillmentSchema } from './fulfillment';
import { Money, moneySchema } from './money';
import { OrderLineItem, orderLineItemSchema } from './orderLineItem';
import {
  OrderLineItemDiscount,
  orderLineItemDiscountSchema,
} from './orderLineItemDiscount';
import { OrderLineItemTax, orderLineItemTaxSchema } from './orderLineItemTax';
import { OrderMoneyAmounts, orderMoneyAmountsSchema } from './orderMoneyAmounts';
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
 * including line items that specify the products to purchase. `Order` objects also
 * include information about any associated tenders, refunds, and returns.
 * All Connect V2 Transactions have all been converted to Orders including all associated
 * itemization data.
 */
export interface Order {
  /** The order's unique ID. */
  id?: string;
  /** The ID of the seller location that this order is associated with. */
  locationId: string;
  /**
   * A client-specified ID to associate an entity in another system
   * with this order.
   */
  referenceId?: string | null;
  /** Represents the origination details of an order. */
  source?: OrderSource;
  /**
   * The ID of the [customer]($m/Customer) associated with the order.
   * You should specify a `customer_id` on the order (or the payment) to ensure that transactions
   * are reliably linked to customers. Omitting this field might result in the creation of new
   * [instant profiles](https://developer.squareup.com/docs/customers-api/what-it-does#instant-profiles).
   */
  customerId?: string | null;
  /** The line items included in the order. */
  lineItems?: OrderLineItem[] | null;
  /**
   * The list of all taxes associated with the order.
   * Taxes can be scoped to either `ORDER` or `LINE_ITEM`. For taxes with `LINE_ITEM` scope, an
   * `OrderLineItemAppliedTax` must be added to each line item that the tax applies to. For taxes
   * with `ORDER` scope, the server generates an `OrderLineItemAppliedTax` for every line item.
   * On reads, each tax in the list includes the total amount of that tax applied to the order.
   * __IMPORTANT__: If `LINE_ITEM` scope is set on any taxes in this field, using the deprecated
   * `line_items.taxes` field results in an error. Use `line_items.applied_taxes`
   * instead.
   */
  taxes?: OrderLineItemTax[] | null;
  /**
   * The list of all discounts associated with the order.
   * Discounts can be scoped to either `ORDER` or `LINE_ITEM`. For discounts scoped to `LINE_ITEM`,
   * an `OrderLineItemAppliedDiscount` must be added to each line item that the discount applies to.
   * For discounts with `ORDER` scope, the server generates an `OrderLineItemAppliedDiscount`
   * for every line item.
   * __IMPORTANT__: If `LINE_ITEM` scope is set on any discounts in this field, using the deprecated
   * `line_items.discounts` field results in an error. Use `line_items.applied_discounts`
   * instead.
   */
  discounts?: OrderLineItemDiscount[] | null;
  /** A list of service charges applied to the order. */
  serviceCharges?: OrderServiceCharge[] | null;
  /**
   * Details about order fulfillment.
   * Orders can only be created with at most one fulfillment. However, orders returned
   * by the API might contain multiple fulfillments.
   */
  fulfillments?: Fulfillment[] | null;
  /**
   * A collection of items from sale orders being returned in this one. Normally part of an
   * itemized return or exchange. There is exactly one `Return` object per sale `Order` being
   * referenced.
   */
  returns?: OrderReturn[];
  /** A collection of various money amounts. */
  returnAmounts?: OrderMoneyAmounts;
  /** A collection of various money amounts. */
  netAmounts?: OrderMoneyAmounts;
  /**
   * A rounding adjustment of the money being returned. Commonly used to apply cash rounding
   * when the minimum unit of the account is smaller than the lowest physical denomination of the currency.
   */
  roundingAdjustment?: OrderRoundingAdjustment;
  /** The tenders that were used to pay for the order. */
  tenders?: Tender[];
  /** The refunds that are part of this order. */
  refunds?: Refund[];
  /**
   * Application-defined data attached to this order. Metadata fields are intended
   * to store descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
   * identifiable information or card details).
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   * Values have a maximum length of 255 characters.
   * An application can have up to 10 entries per metadata field.
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   * For more information, see  [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Record<string, string> | null;
  /** The timestamp for when the order was created, in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). */
  createdAt?: string;
  /** The timestamp for when the order was last updated, in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). */
  updatedAt?: string;
  /** The timestamp for when the order reached a terminal [state](entity:OrderState), in RFC 3339 format (for example "2016-09-04T23:59:33.123Z"). */
  closedAt?: string;
  /** The state of the order. */
  state?: string;
  /**
   * The version number, which is incremented each time an update is committed to the order.
   * Orders not created through the API do not include a version number and
   * therefore cannot be updated.
   * [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders).
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
   * A short-term identifier for the order (such as a customer first name,
   * table number, or auto-generated order number that resets daily).
   */
  ticketName?: string | null;
  /**
   * Pricing options for an order. The options affect how the order's price is calculated.
   * They can be used, for example, to apply automatic price adjustments that are based on preconfigured
   * [pricing rules]($m/CatalogPricingRule).
   */
  pricingOptions?: OrderPricingOptions;
  /** A set-like list of Rewards that have been added to the Order. */
  rewards?: OrderReward[];
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  netAmountDueMoney?: Money;
}

export const orderSchema: Schema<Order> = object({
  id: ['id', optional(string())],
  locationId: ['location_id', string()],
  referenceId: ['reference_id', optional(nullable(string()))],
  source: ['source', optional(lazy(() => orderSourceSchema))],
  customerId: ['customer_id', optional(nullable(string()))],
  lineItems: [
    'line_items',
    optional(nullable(array(lazy(() => orderLineItemSchema)))),
  ],
  taxes: [
    'taxes',
    optional(nullable(array(lazy(() => orderLineItemTaxSchema)))),
  ],
  discounts: [
    'discounts',
    optional(nullable(array(lazy(() => orderLineItemDiscountSchema)))),
  ],
  serviceCharges: [
    'service_charges',
    optional(nullable(array(lazy(() => orderServiceChargeSchema)))),
  ],
  fulfillments: [
    'fulfillments',
    optional(nullable(array(lazy(() => fulfillmentSchema)))),
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
  metadata: ['metadata', optional(nullable(dict(string())))],
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
  ticketName: ['ticket_name', optional(nullable(string()))],
  pricingOptions: [
    'pricing_options',
    optional(lazy(() => orderPricingOptionsSchema)),
  ],
  rewards: ['rewards', optional(array(lazy(() => orderRewardSchema)))],
  netAmountDueMoney: [
    'net_amount_due_money',
    optional(lazy(() => moneySchema)),
  ],
});
