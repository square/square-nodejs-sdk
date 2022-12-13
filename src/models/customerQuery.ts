import { lazy, object, optional, Schema } from '../schema';
import { CustomerFilter, customerFilterSchema } from './customerFilter';
import { CustomerSort, customerSortSchema } from './customerSort';

/** Represents filtering and sorting criteria for a [SearchCustomers]($e/Customers/SearchCustomers) request. */
export interface CustomerQuery {
  /**
   * Represents the filtering criteria in a [search query]($m/CustomerQuery) that defines how to filter
   * customer profiles returned in [SearchCustomers]($e/Customers/SearchCustomers) results.
   */
  filter?: CustomerFilter;
  /**
   * Represents the sorting criteria in a [search query]($m/CustomerQuery) that defines how to sort
   * customer profiles returned in [SearchCustomers]($e/Customers/SearchCustomers) results.
   */
  sort?: CustomerSort;
}

export const customerQuerySchema: Schema<CustomerQuery> = object({
  filter: ['filter', optional(lazy(() => customerFilterSchema))],
  sort: ['sort', optional(lazy(() => customerSortSchema))],
});
