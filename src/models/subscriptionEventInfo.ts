import { object, optional, Schema, string } from '../schema';

/** Provides information about the subscription event. */
export interface SubscriptionEventInfo {
  /** A human-readable explanation for the event. */
  detail?: string;
  /** The possible subscription event info codes. */
  code?: string;
}

export const subscriptionEventInfoSchema: Schema<SubscriptionEventInfo> = object(
  { detail: ['detail', optional(string())], code: ['code', optional(string())] }
);
