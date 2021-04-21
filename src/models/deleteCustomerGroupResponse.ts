import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [DeleteCustomerGroup]($e/CustomerGroups/DeleteCustomerGroup) endpoint.
 */
export interface DeleteCustomerGroupResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteCustomerGroupResponseSchema: Schema<DeleteCustomerGroupResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
