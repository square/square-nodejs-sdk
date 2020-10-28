import { array, object, optional, Schema, string } from '../schema';

/** Filter based on order `source` information. */
export interface SearchOrdersSourceFilter {
  /**
   * Filters by [Source](#type-ordersource) `name`. Will return any orders
   * with with a `source.name` that matches any of the listed source names.
   * Max: 10 source names.
   */
  sourceNames?: string[];
}

export const searchOrdersSourceFilterSchema: Schema<SearchOrdersSourceFilter> = object(
  { sourceNames: ['source_names', optional(array(string()))] }
);
