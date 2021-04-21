import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [RemoveGroupFromCustomer]($e/Customers/RemoveGroupFromCustomer)
 * endpoint.
 */
export interface RemoveGroupFromCustomerResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const removeGroupFromCustomerResponseSchema: Schema<RemoveGroupFromCustomerResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
