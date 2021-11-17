import { lazy, object, optional, Schema, string } from '../schema';
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
  /** The ID of the subscription plan associated with the subscription. */
  planId: string;
  /** Provides information about the subscription event. */
  info?: SubscriptionEventInfo;
}

export const subscriptionEventSchema: Schema<SubscriptionEvent> = object({
  id: ['id', string()],
  subscriptionEventType: ['subscription_event_type', string()],
  effectiveDate: ['effective_date', string()],
  planId: ['plan_id', string()],
  info: ['info', optional(lazy(() => subscriptionEventInfoSchema))],
});
