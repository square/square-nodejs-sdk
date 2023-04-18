import { array, nullable, object, optional, Schema, string } from '../schema';

/** A filter based on order `source` information. */
export interface SearchOrdersSourceFilter {
  /**
   * Filters by the [Source](entity:OrderSource) `name`. The filter returns any orders
   * with a `source.name` that matches any of the listed source names.
   * Max: 10 source names.
   */
  sourceNames?: string[] | null;
}

export const searchOrdersSourceFilterSchema: Schema<SearchOrdersSourceFilter> = object(
  { sourceNames: ['source_names', optional(nullable(array(string())))] }
);
