import { array, lazy, object, optional, Schema } from '../schema';
import { CustomerGroup, customerGroupSchema } from './customerGroup';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [UpdateCustomerGroup]($e/CustomerGroups/UpdateCustomerGroup) endpoint.
 * Either `errors` or `group` is present in a given response (never both).
 */
export interface UpdateCustomerGroupResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a group of customer profiles.
   * Customer groups can be created, be modified, and have their membership defined using
   * the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
   */
  group?: CustomerGroup;
}

export const updateCustomerGroupResponseSchema: Schema<UpdateCustomerGroupResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    group: ['group', optional(lazy(() => customerGroupSchema))],
  }
);
