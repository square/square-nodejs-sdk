import { array, object, Schema, string } from '../schema';

/** Filter events by event type. */
export interface LoyaltyEventTypeFilter {
  /**
   * The loyalty event types used to filter the result.
   * If multiple values are specified, the endpoint uses a
   * logical OR to combine them.
   * See [LoyaltyEventType](#type-loyaltyeventtype) for possible values
   */
  types: string[];
}

export const loyaltyEventTypeFilterSchema: Schema<LoyaltyEventTypeFilter> = object(
  { types: ['types', array(string())] }
);
