import { nullable, object, optional, Schema, string } from '../schema';

/** Provides information about the subscription event. */
export interface SubscriptionEventInfo {
  /** A human-readable explanation for the event. */
  detail?: string | null;
  /** Supported info codes of a subscription event. */
  code?: string;
}

export const subscriptionEventInfoSchema: Schema<SubscriptionEventInfo> = object(
  {
    detail: ['detail', optional(nullable(string()))],
    code: ['code', optional(string())],
  }
);
