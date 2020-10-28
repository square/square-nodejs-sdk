import { array, object, optional, Schema, string } from '../schema';

/** Represents a set of SearchSubscriptionsQuery filters used to limit the set of Subscriptions returned by SearchSubscriptions. */
export interface SearchSubscriptionsFilter {
  /** A filter to select subscriptions based on the customer. */
  customerIds?: string[];
  /** A filter to select subscriptions based the location. */
  locationIds?: string[];
}

export const searchSubscriptionsFilterSchema: Schema<SearchSubscriptionsFilter> = object(
  {
    customerIds: ['customer_ids', optional(array(string()))],
    locationIds: ['location_ids', optional(array(string()))],
  }
);
