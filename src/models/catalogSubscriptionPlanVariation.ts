import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { SubscriptionPhase, subscriptionPhaseSchema } from './subscriptionPhase';

/**
 * Describes a subscription plan variation. A subscription plan variation represents how the subscription for a product or service is sold.
 * For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
 */
export interface CatalogSubscriptionPlanVariation {
  /** The name of the plan variation. */
  name: string;
  /** A list containing each [SubscriptionPhase](entity:SubscriptionPhase) for this plan variation. */
  phases: SubscriptionPhase[];
  /** The id of the subscription plan, if there is one. */
  subscriptionPlanId?: string | null;
}

export const catalogSubscriptionPlanVariationSchema: Schema<CatalogSubscriptionPlanVariation> = object(
  {
    name: ['name', string()],
    phases: ['phases', array(lazy(() => subscriptionPhaseSchema))],
    subscriptionPlanId: ['subscription_plan_id', optional(nullable(string()))],
  }
);
