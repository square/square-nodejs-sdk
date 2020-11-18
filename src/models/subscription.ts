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

/**
 * Represents a customer subscription to a subscription plan.
 * For an overview of the `Subscription` type, see
 * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
 */
export interface Subscription {
  /** The Square-assigned ID of the subscription. */
  id?: string;
  /** The ID of the location associated with the subscription. */
  locationId?: string;
  /** The ID of the associated [subscription plan](#type-catalogsubscriptionplan). */
  planId?: string;
  /** The ID of the associated [customer](#type-customer) profile. */
  customerId?: string;
  /**
   * The start date of the subscription, in YYYY-MM-DD format (for example,
   * 2013-01-15).
   */
  startDate?: string;
  /**
   * The subscription cancellation date, in YYYY-MM-DD format (for
   * example, 2013-01-15). On this date, the subscription status changes
   * to `CANCELED` and the subscription billing stops.
   * If you don't set this field, the subscription plan dictates if and
   * when subscription ends.
   * You cannot update this field, you can only clear it.
   */
  canceledDate?: string;
  /** Possible subscription status values. */
  status?: string;
  /**
   * The tax amount applied when billing the subscription. The
   * percentage is expressed in decimal form, using a `'.'` as the decimal
   * separator and without a `'%'` sign. For example, a value of `7.5`
   * corresponds to 7.5%.
   */
  taxPercentage?: string;
  /**
   * The IDs of the [invoices](#type-invoice) created for the
   * subscription, listed in order when the invoices were created
   * (oldest invoices appear first).
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
  version?: number;
  /** The timestamp when the subscription was created, in RFC 3339 format. */
  createdAt?: string;
  /**
   * The ID of the [customer](#type-customer) [card](#type-card)
   * that is charged for the subscription.
   */
  cardId?: string;
  /**
   * The date up to which the customer is invoiced for the
   * subscription, in YYYY-MM-DD format (for example, 2013-01-15).
   * After the invoice is paid for a given billing period,
   * this date will be the last day of the billing period.
   * For example,
   * suppose for the month of May a customer gets an invoice
   * (or charged the card) on May 1. For the monthly billing scenario,
   * this date is then set to May 31.
   */
  paidUntilDate?: string;
  /**
   * Timezone that will be used in date calculations for the subscription.
   * Defaults to the timezone of the location based on `location_id`.
   * Format: the IANA Timezone Database identifier for the location timezone (for example, `America/Los_Angeles`).
   */
  timezone?: string;
}

export const subscriptionSchema: Schema<Subscription> = object({
  id: ['id', optional(string())],
  locationId: ['location_id', optional(string())],
  planId: ['plan_id', optional(string())],
  customerId: ['customer_id', optional(string())],
  startDate: ['start_date', optional(string())],
  canceledDate: ['canceled_date', optional(string())],
  status: ['status', optional(string())],
  taxPercentage: ['tax_percentage', optional(string())],
  invoiceIds: ['invoice_ids', optional(array(string()))],
  priceOverrideMoney: [
    'price_override_money',
    optional(lazy(() => moneySchema)),
  ],
  version: ['version', optional(number())],
  createdAt: ['created_at', optional(string())],
  cardId: ['card_id', optional(string())],
  paidUntilDate: ['paid_until_date', optional(string())],
  timezone: ['timezone', optional(string())],
});
