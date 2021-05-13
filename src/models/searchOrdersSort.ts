import { object, optional, Schema, string } from '../schema';

/**
 * Sorting criteria for a `SearchOrders` request. Results can only be sorted
 * by a timestamp field.
 */
export interface SearchOrdersSort {
  /** Specifies which timestamp to use to sort `SearchOrder` results. */
  sortField: string;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
}

export const searchOrdersSortSchema: Schema<SearchOrdersSort> = object({
  sortField: ['sort_field', string()],
  sortOrder: ['sort_order', optional(string())],
});
