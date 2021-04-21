import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [AddGroupToCustomer]($e/Customers/AddGroupToCustomer) endpoint.
 */
export interface AddGroupToCustomerResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const addGroupToCustomerResponseSchema: Schema<AddGroupToCustomerResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
