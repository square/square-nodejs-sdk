import { array, lazy, object, optional, Schema, string } from '../schema';
import { Customer, customerSchema } from './customer';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the SearchCustomers endpoint.
 * One of `errors` or `customers` is present in a given response (never both).
 */
export interface SearchCustomersResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** An array of `Customer` objects that match a query. */
  customers?: Customer[];
  /**
   * A pagination cursor that can be used during subsequent calls
   * to SearchCustomers to retrieve the next set of results associated
   * with the original query. Pagination cursors are only present when
   * a request succeeds and additional results are available.
   * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
   */
  cursor?: string;
}

export const searchCustomersResponseSchema: Schema<SearchCustomersResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    customers: ['customers', optional(array(lazy(() => customerSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
