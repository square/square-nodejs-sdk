import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';
import { Phase, phaseSchema } from './phase';
import {
  SubscriptionSource,
  subscriptionSourceSchema,
} from './subscriptionSource';

/**
 * Defines input parameters in a request to the
 * [CreateSubscription]($e/Subscriptions/CreateSubscription) endpoint.
 */
export interface CreateSubscriptionRequest {
  /**
   * A unique string that identifies this `CreateSubscription` request.
   * If you do not provide a unique string (or provide an empty string as the value),
   * the endpoint treats each request as independent.
   * For more information, see [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
  /** The ID of the location the subscription is associated with. */
  locationId: string;
  /** The ID of the [subscription plan variation](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations#plan-variations) created using the Catalog API. */
  planVariationId?: string;
  /** The ID of the [customer](entity:Customer) subscribing to the subscription plan variation. */
  customerId: string;
  /**
   * The `YYYY-MM-DD`-formatted date to start the subscription.
   * If it is unspecified, the subscription starts immediately.
   */
  startDate?: string;
  /**
   * The `YYYY-MM-DD`-formatted date when the newly created subscription is scheduled for cancellation.
   * This date overrides the cancellation date set in the plan variation configuration.
   * If the cancellation date is earlier than the end date of a subscription cycle, the subscription stops
   * at the canceled date and the subscriber is sent a prorated invoice at the beginning of the canceled cycle.
   * When the subscription plan of the newly created subscription has a fixed number of cycles and the `canceled_date`
   * occurs before the subscription plan expires, the specified `canceled_date` sets the date when the subscription
   * stops through the end of the last cycle.
   */
  canceledDate?: string;
  /**
   * The tax to add when billing the subscription.
   * The percentage is expressed in decimal form, using a `'.'` as the decimal
   * separator and without a `'%'` sign. For example, a value of 7.5
   * corresponds to 7.5%.
   */
  taxPercentage?: string;
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
   * The ID of the [subscriber's](entity:Customer) [card](entity:Card) to charge.
   * If it is not specified, the subscriber receives an invoice via email with a link to pay for their subscription.
   */
  cardId?: string;
  /**
   * The timezone that is used in date calculations for the subscription. If unset, defaults to
   * the location timezone. If a timezone is not configured for the location, defaults to "America/New_York".
   * Format: the IANA Timezone Database identifier for the location timezone. For
   * a list of time zones, see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  timezone?: string;
  /** The origination details of the subscription. */
  source?: SubscriptionSource;
  /** The day-of-the-month to change the billing date to. */
  monthlyBillingAnchorDate?: number;
  /** array of phases for this subscription */
  phases?: Phase[];
}

export const createSubscriptionRequestSchema: Schema<CreateSubscriptionRequest> = object(
  {
    idempotencyKey: ['idempotency_key', optional(string())],
    locationId: ['location_id', string()],
    planVariationId: ['plan_variation_id', optional(string())],
    customerId: ['customer_id', string()],
    startDate: ['start_date', optional(string())],
    canceledDate: ['canceled_date', optional(string())],
    taxPercentage: ['tax_percentage', optional(string())],
    priceOverrideMoney: [
      'price_override_money',
      optional(lazy(() => moneySchema)),
    ],
    cardId: ['card_id', optional(string())],
    timezone: ['timezone', optional(string())],
    source: ['source', optional(lazy(() => subscriptionSourceSchema))],
    monthlyBillingAnchorDate: [
      'monthly_billing_anchor_date',
      optional(number()),
    ],
    phases: ['phases', optional(array(lazy(() => phaseSchema)))],
  }
);
