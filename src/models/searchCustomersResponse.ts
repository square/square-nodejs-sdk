import {
  array,
  bigint,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Customer, customerSchema } from './customer';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the `SearchCustomers` endpoint.
 * Either `errors` or `customers` is present in a given response (never both).
 */
export interface SearchCustomersResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The customer profiles that match the search query. If any search condition is not met, the result is an empty object (`{}`).
   * Only customer profiles with public information (`given_name`, `family_name`, `company_name`, `email_address`, or `phone_number`)
   * are included in the response.
   */
  customers?: Customer[];
  /**
   * A pagination cursor that can be used during subsequent calls
   * to `SearchCustomers` to retrieve the next set of results associated
   * with the original query. Pagination cursors are only present when
   * a request succeeds and additional results are available.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /**
   * The total count of customers associated with the Square account that match the search query. Only customer profiles with
   * public information (`given_name`, `family_name`, `company_name`, `email_address`, or `phone_number`) are counted. This field is
   * present only if `count` is set to `true` in the request.
   */
  count?: bigint;
}

export const searchCustomersResponseSchema: Schema<SearchCustomersResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    customers: ['customers', optional(array(lazy(() => customerSchema)))],
    cursor: ['cursor', optional(string())],
    count: ['count', optional(bigint())],
  }
);
