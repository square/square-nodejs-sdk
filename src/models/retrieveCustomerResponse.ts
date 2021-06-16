import { array, lazy, object, optional, Schema } from '../schema';
import { Customer, customerSchema } from './customer';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the `RetrieveCustomer` endpoint.
 * Either `errors` or `customer` is present in a given response (never both).
 */
export interface RetrieveCustomerResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a Square customer profile in the Customer Directory of a Square seller. */
  customer?: Customer;
}

export const retrieveCustomerResponseSchema: Schema<RetrieveCustomerResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    customer: ['customer', optional(lazy(() => customerSchema))],
  }
);
