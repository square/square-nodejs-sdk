import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';
import {
  SubscriptionPhase,
  subscriptionPhaseSchema,
} from './subscriptionPhase';

/**
 * Describes a subscription plan. A subscription plan represents what you want to sell in a subscription model, and includes references to each of the associated subscription plan variations.
 * For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
 */
export interface CatalogSubscriptionPlan {
  /** The name of the plan. */
  name: string;
  /**
   * A list of SubscriptionPhase containing the [SubscriptionPhase](entity:SubscriptionPhase) for this plan.
   * This field it required. Not including this field will throw a REQUIRED_FIELD_MISSING error
   */
  phases?: SubscriptionPhase[] | null;
  /** The list of subscription plan variations available for this product */
  subscriptionPlanVariations?: CatalogObject[] | null;
  /** The list of IDs of `CatalogItems` that are eligible for subscription by this SubscriptionPlan's variations. */
  eligibleItemIds?: string[] | null;
  /** The list of IDs of `CatalogCategory` that are eligible for subscription by this SubscriptionPlan's variations. */
  eligibleCategoryIds?: string[] | null;
  /** If true, all items in the merchant's catalog are subscribable by this SubscriptionPlan. */
  allItems?: boolean | null;
}

export const catalogSubscriptionPlanSchema: Schema<CatalogSubscriptionPlan> = object(
  {
    name: ['name', string()],
    phases: [
      'phases',
      optional(nullable(array(lazy(() => subscriptionPhaseSchema)))),
    ],
    subscriptionPlanVariations: [
      'subscription_plan_variations',
      optional(nullable(array(lazy(() => catalogObjectSchema)))),
    ],
    eligibleItemIds: ['eligible_item_ids', optional(nullable(array(string())))],
    eligibleCategoryIds: [
      'eligible_category_ids',
      optional(nullable(array(string()))),
    ],
    allItems: ['all_items', optional(nullable(boolean()))],
  }
);
