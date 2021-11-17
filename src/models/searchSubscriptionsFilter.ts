import { array, object, optional, Schema, string } from '../schema';

/**
 * Represents a set of query expressions (filters) to narrow the scope of targeted subscriptions returned by
 * the [SearchSubscriptions]($e/Subscriptions/SearchSubscriptions) endpoint.
 */
export interface SearchSubscriptionsFilter {
  /** A filter to select subscriptions based on the subscribing customer IDs. */
  customerIds?: string[];
  /** A filter to select subscriptions based on the location. */
  locationIds?: string[];
  /** A filter to select subscriptions based on the source application. */
  sourceNames?: string[];
}

export const searchSubscriptionsFilterSchema: Schema<SearchSubscriptionsFilter> = object(
  {
    customerIds: ['customer_ids', optional(array(string()))],
    locationIds: ['location_ids', optional(array(string()))],
    sourceNames: ['source_names', optional(array(string()))],
  }
);
