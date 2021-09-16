import { bigint, lazy, object, optional, Schema, string } from '../schema';
import { CustomerQuery, customerQuerySchema } from './customerQuery';

/**
 * Defines the fields that are included in the request body of a request to the
 * `SearchCustomers` endpoint.
 */
export interface SearchCustomersRequest {
  /**
   * Include the pagination cursor in subsequent calls to this endpoint to retrieve
   * the next set of results associated with the original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /**
   * The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.
   * The limit is ignored if it is less than the minimum or greater than the maximum value. The default value is 100.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  limit?: bigint;
  /**
   * Represents a query (including filtering criteria, sorting criteria, or both) used to search
   * for customer profiles.
   */
  query?: CustomerQuery;
}

export const searchCustomersRequestSchema: Schema<SearchCustomersRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(bigint())],
    query: ['query', optional(lazy(() => customerQuerySchema))],
  }
);
