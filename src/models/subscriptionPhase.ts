import { lazy, number, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * Describes a phase in a subscription plan. For more information, see
 * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
 */
export interface SubscriptionPhase {
  /** The Square-assigned ID of the subscription phase. This field cannot be changed after a `SubscriptionPhase` is created. */
  uid?: string;
  /** Determines the billing cadence of a [Subscription](#type-Subscription) */
  cadence: string;
  /** The number of `cadence`s the phase lasts. If not set, the phase never ends. Only the last phase can be indefinite. This field cannot be changed after a `SubscriptionPhase` is created. */
  periods?: number;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  recurringPriceMoney: Money;
  /** The position this phase appears in the sequence of phases defined for the plan, indexed from 0. This field cannot be changed after a `SubscriptionPhase` is created. */
  ordinal?: number;
}

export const subscriptionPhaseSchema: Schema<SubscriptionPhase> = object({
  uid: ['uid', optional(string())],
  cadence: ['cadence', string()],
  periods: ['periods', optional(number())],
  recurringPriceMoney: ['recurring_price_money', lazy(() => moneySchema)],
  ordinal: ['ordinal', optional(number())],
});
