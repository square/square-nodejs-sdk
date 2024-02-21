import { array, lazy, object, optional, Schema } from '../schema';
import { Customer, customerSchema } from './customer';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [UpdateCustomer]($e/Customers/UpdateCustomer) or
 * [BulkUpdateCustomers]($e/Customers/BulkUpdateCustomers) endpoint.
 * Either `errors` or `customer` is present in a given response (never both).
 */
export interface UpdateCustomerResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a Square customer profile in the Customer Directory of a Square seller. */
  customer?: Customer;
}

export const updateCustomerResponseSchema: Schema<UpdateCustomerResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    customer: ['customer', optional(lazy(() => customerSchema))],
  }
);
