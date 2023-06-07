import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Phase, phaseSchema } from './phase';

/** Represents an action as a pending change to a subscription. */
export interface SubscriptionAction {
  /** The ID of an action scoped to a subscription. */
  id?: string;
  /** Supported types of an action as a pending change to a subscription. */
  type?: string;
  /** The `YYYY-MM-DD`-formatted date when the action occurs on the subscription. */
  effectiveDate?: string | null;
  /** A list of Phases, to pass phase-specific information used in the swap. */
  phases?: Phase[] | null;
  /** The target subscription plan variation that a subscription switches to, for a `SWAP_PLAN` action. */
  newPlanVariationId?: string | null;
}

export const subscriptionActionSchema: Schema<SubscriptionAction> = object({
  id: ['id', optional(string())],
  type: ['type', optional(string())],
  effectiveDate: ['effective_date', optional(nullable(string()))],
  phases: ['phases', optional(nullable(array(lazy(() => phaseSchema))))],
  newPlanVariationId: ['new_plan_variation_id', optional(nullable(string()))],
});
