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
   * A limit on the number of results to be returned in a single page.
   * The limit is advisory. The implementation might return more or fewer results.
   * If the supplied limit is negative, zero, or higher than the maximum limit
   * of 100, it is ignored.
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
