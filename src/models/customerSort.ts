import { object, optional, Schema, string } from '../schema';

/** Specifies how searched customers profiles are sorted, including the sort key and sort order. */
export interface CustomerSort {
  /** Specifies customer attributes as the sort key to customer profiles returned from a search. */
  field?: string;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  order?: string;
}

export const customerSortSchema: Schema<CustomerSort> = object({
  field: ['field', optional(string())],
  order: ['order', optional(string())],
});
