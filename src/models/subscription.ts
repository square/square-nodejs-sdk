import {
  array,
  bigint,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';
import { Phase, phaseSchema } from './phase';
import {
  SubscriptionAction,
  subscriptionActionSchema,
} from './subscriptionAction';
import {
  SubscriptionSource,
  subscriptionSourceSchema,
} from './subscriptionSource';

/**
 * Represents a subscription purchased by a customer.
 * For more information, see
 * [Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
 */
export interface Subscription {
  /** The Square-assigned ID of the subscription. */
  id?: string;
  /** The ID of the location associated with the subscription. */
  locationId?: string;
  /** The ID of the subscribed-to [subscription plan variation](entity:CatalogSubscriptionPlanVariation). */
  planVariationId?: string;
  /** The ID of the subscribing [customer](entity:Customer) profile. */
  customerId?: string;
  /** The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) to start the subscription. */
  startDate?: string;
  /**
   * The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) to cancel the subscription,
   * when the subscription status changes to `CANCELED` and the subscription billing stops.
   * If this field is not set, the subscription ends according its subscription plan.
   * This field cannot be updated, other than being cleared.
   */
  canceledDate?: string | null;
  /**
   * The `YYYY-MM-DD`-formatted date up to when the subscriber is invoiced for the
   * subscription.
   * After the invoice is sent for a given billing period,
   * this date will be the last day of the billing period.
   * For example,
   * suppose for the month of May a subscriber gets an invoice
   * (or charged the card) on May 1. For the monthly billing scenario,
   * this date is then set to May 31.
   */
  chargedThroughDate?: string;
  /** Supported subscription statuses. */
  status?: string;
  /**
   * The tax amount applied when billing the subscription. The
   * percentage is expressed in decimal form, using a `'.'` as the decimal
   * separator and without a `'%'` sign. For example, a value of `7.5`
   * corresponds to 7.5%.
   */
  taxPercentage?: string | null;
  /**
   * The IDs of the [invoices](entity:Invoice) created for the
   * subscription, listed in order when the invoices were created
   * (newest invoices appear first).
   */
  invoiceIds?: string[];
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  priceOverrideMoney?: Money;
  /**
   * The version of the object. When updating an object, the version
   * supplied must match the version in the database, otherwise the write will
   * be rejected as conflicting.
   */
  version?: bigint;
  /** The timestamp when the subscription was created, in RFC 3339 format. */
  createdAt?: string;
  /**
   * The ID of the [subscriber's](entity:Customer) [card](entity:Card)
   * used to charge for the subscription.
   */
  cardId?: string | null;
  /**
   * Timezone that will be used in date calculations for the subscription.
   * Defaults to the timezone of the location based on `location_id`.
   * Format: the IANA Timezone Database identifier for the location timezone (for example, `America/Los_Angeles`).
   */
  timezone?: string;
  /** The origination details of the subscription. */
  source?: SubscriptionSource;
  /**
   * The list of scheduled actions on this subscription. It is set only in the response from
   * [RetrieveSubscription]($e/Subscriptions/RetrieveSubscription) with the query parameter
   * of `include=actions` or from
   * [SearchSubscriptions]($e/Subscriptions/SearchSubscriptions) with the input parameter
   * of `include:["actions"]`.
   */
  actions?: SubscriptionAction[] | null;
  /** The day of the month on which the subscription will issue invoices and publish orders. */
  monthlyBillingAnchorDate?: number;
  /** array of phases for this subscription */
  phases?: Phase[];
}

export const subscriptionSchema: Schema<Subscription> = object({
  id: ['id', optional(string())],
  locationId: ['location_id', optional(string())],
  planVariationId: ['plan_variation_id', optional(string())],
  customerId: ['customer_id', optional(string())],
  startDate: ['start_date', optional(string())],
  canceledDate: ['canceled_date', optional(nullable(string()))],
  chargedThroughDate: ['charged_through_date', optional(string())],
  status: ['status', optional(string())],
  taxPercentage: ['tax_percentage', optional(nullable(string()))],
  invoiceIds: ['invoice_ids', optional(array(string()))],
  priceOverrideMoney: [
    'price_override_money',
    optional(lazy(() => moneySchema)),
  ],
  version: ['version', optional(bigint())],
  createdAt: ['created_at', optional(string())],
  cardId: ['card_id', optional(nullable(string()))],
  timezone: ['timezone', optional(string())],
  source: ['source', optional(lazy(() => subscriptionSourceSchema))],
  actions: [
    'actions',
    optional(nullable(array(lazy(() => subscriptionActionSchema)))),
  ],
  monthlyBillingAnchorDate: ['monthly_billing_anchor_date', optional(number())],
  phases: ['phases', optional(array(lazy(() => phaseSchema)))],
});
