import {
  array,
  bigint,
  boolean,
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
  /** The day of the month the billing period starts. */
  monthlyBillingAnchorDate?: bigint | null;
  /** Whether bills for this plan variation can be split for proration. */
  canProrate?: boolean | null;
  /**
   * The ID of a "successor" plan variation to this one. If the field is set, and this object is disabled at all
   * locations, it indicates that this variation is deprecated and the object identified by the successor ID be used in
   * its stead.
   */
  successorPlanVariationId?: string | null;
}

export const catalogSubscriptionPlanVariationSchema: Schema<CatalogSubscriptionPlanVariation> = object(
  {
    name: ['name', string()],
    phases: ['phases', array(lazy(() => subscriptionPhaseSchema))],
    subscriptionPlanId: ['subscription_plan_id', optional(nullable(string()))],
    monthlyBillingAnchorDate: [
      'monthly_billing_anchor_date',
      optional(nullable(bigint())),
    ],
    canProrate: ['can_prorate', optional(nullable(boolean()))],
    successorPlanVariationId: [
      'successor_plan_variation_id',
      optional(nullable(string())),
    ],
  }
);
