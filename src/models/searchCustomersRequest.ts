import { lazy, number, object, optional, Schema, string } from '../schema';
import { CustomerQuery, customerQuerySchema } from './customerQuery';

/**
 * Defines the fields included in the request body for the
 * SearchCustomers endpoint.
 */
export interface SearchCustomersRequest {
  /**
   * Include the pagination cursor in subsequent calls to this endpoint to retrieve
   * the next set of results associated with the original query.
   * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
   */
  cursor?: string;
  /**
   * A limit on the number of results to be returned in a single page.
   * The limit is advisory - the implementation may return more or fewer results.
   * If the supplied limit is negative, zero, or is higher than the maximum limit
   * of 100, it will be ignored.
   */
  limit?: number;
  /**
   * Represents a query (including filtering criteria, sorting criteria, or both) used to search
   * for customer profiles.
   */
  query?: CustomerQuery;
}

export const searchCustomersRequestSchema: Schema<SearchCustomersRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
    query: ['query', optional(lazy(() => customerQuerySchema))],
  }
);
