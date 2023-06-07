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

/** Describes the pricing for the subscription. */
export interface SubscriptionPricing {
  /** Determines the pricing of a [Subscription]($m/Subscription) */
  type?: string;
  /** The ids of the discount catalog objects */
  discountIds?: string[] | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  priceMoney?: Money;
}

export const subscriptionPricingSchema: Schema<SubscriptionPricing> = object({
  type: ['type', optional(string())],
  discountIds: ['discount_ids', optional(nullable(array(string())))],
  priceMoney: ['price_money', optional(lazy(() => moneySchema))],
});
