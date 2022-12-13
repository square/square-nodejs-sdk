import { array, lazy, object, optional, Schema, string } from '../schema';
import { Customer, customerSchema } from './customer';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the `ListCustomers` endpoint.
 * Either `errors` or `customers` is present in a given response (never both).
 */
export interface ListCustomersResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The customer profiles associated with the Square account or an empty object (`{}`) if none are found. */
  customers?: Customer[];
  /**
   * A pagination cursor to retrieve the next set of results for the
   * original query. A cursor is only present if the request succeeded and additional results
   * are available.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const listCustomersResponseSchema: Schema<ListCustomersResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    customers: ['customers', optional(array(lazy(() => customerSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
