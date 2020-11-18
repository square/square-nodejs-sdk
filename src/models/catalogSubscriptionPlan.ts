import { array, lazy, object, optional, Schema, string } from '../schema';
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
  name?: string;
  /** A list of SubscriptionPhase containing the [SubscriptionPhase](#type-SubscriptionPhase) for this plan. */
  phases?: SubscriptionPhase[];
}

export const catalogSubscriptionPlanSchema: Schema<CatalogSubscriptionPlan> = object(
  {
    name: ['name', optional(string())],
    phases: ['phases', optional(array(lazy(() => subscriptionPhaseSchema)))],
  }
);
