import { lazy, object, optional, Schema } from '../schema';
import { CustomerFilter, customerFilterSchema } from './customerFilter';
import { CustomerSort, customerSortSchema } from './customerSort';

/**
 * Represents a query (including filtering criteria, sorting criteria, or both) used to search
 * for customer profiles.
 */
export interface CustomerQuery {
  /**
   * Represents a set of `CustomerQuery` filters used to limit the set of
   * customers returned by the [SearchCustomers]($e/Customers/SearchCustomers) endpoint.
   */
  filter?: CustomerFilter;
  /** Specifies how searched customers profiles are sorted, including the sort key and sort order. */
  sort?: CustomerSort;
}

export const customerQuerySchema: Schema<CustomerQuery> = object({
  filter: ['filter', optional(lazy(() => customerFilterSchema))],
  sort: ['sort', optional(lazy(() => customerSortSchema))],
});
