import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Phase, phaseSchema } from './phase';
import {
  SubscriptionEventInfo,
  subscriptionEventInfoSchema,
} from './subscriptionEventInfo';

/** Describes changes to a subscription and the subscription status. */
export interface SubscriptionEvent {
  /** The ID of the subscription event. */
  id: string;
  /** Supported types of an event occurred to a subscription. */
  subscriptionEventType: string;
  /** The `YYYY-MM-DD`-formatted date (for example, 2013-01-15) when the subscription event occurred. */
  effectiveDate: string;
  /** The day-of-the-month the billing anchor date was changed to, if applicable. */
  monthlyBillingAnchorDate?: number;
  /** Provides information about the subscription event. */
  info?: SubscriptionEventInfo;
  /** A list of Phases, to pass phase-specific information used in the swap. */
  phases?: Phase[] | null;
  /** The ID of the subscription plan variation associated with the subscription. */
  planVariationId: string;
}

export const subscriptionEventSchema: Schema<SubscriptionEvent> = object({
  id: ['id', string()],
  subscriptionEventType: ['subscription_event_type', string()],
  effectiveDate: ['effective_date', string()],
  monthlyBillingAnchorDate: ['monthly_billing_anchor_date', optional(number())],
  info: ['info', optional(lazy(() => subscriptionEventInfoSchema))],
  phases: ['phases', optional(nullable(array(lazy(() => phaseSchema))))],
  planVariationId: ['plan_variation_id', string()],
});
