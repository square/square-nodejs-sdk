import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  SubscriptionPhase,
  subscriptionPhaseSchema,
} from './subscriptionPhase';

/**
 * Describes a subscription plan. For more information, see
 * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
 */
export interface CatalogSubscriptionPlan {
  /** The name of the plan. */
  name: string;
  /**
   * A list of SubscriptionPhase containing the [SubscriptionPhase]($m/SubscriptionPhase) for this plan.
   * This field it required. Not including this field will throw a REQUIRED_FIELD_MISSING error
   */
  phases?: SubscriptionPhase[] | null;
}

export const catalogSubscriptionPlanSchema: Schema<CatalogSubscriptionPlan> = object(
  {
    name: ['name', string()],
    phases: [
      'phases',
      optional(nullable(array(lazy(() => subscriptionPhaseSchema)))),
    ],
  }
);
