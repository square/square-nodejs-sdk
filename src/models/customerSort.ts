import { object, optional, Schema, string } from '../schema';

/**
 * Represents the sorting criteria in a [search query]($m/CustomerQuery) that defines how to sort
 * customer profiles returned in [SearchCustomers]($e/Customers/SearchCustomers) results.
 */
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
