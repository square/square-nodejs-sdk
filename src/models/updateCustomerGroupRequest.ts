import { lazy, object, Schema } from '../schema';
import { CustomerGroup, customerGroupSchema } from './customerGroup';

/**
 * Defines the body parameters that can be included in a request to the
 * [UpdateCustomerGroup]($e/CustomerGroups/UpdateCustomerGroup) endpoint.
 */
export interface UpdateCustomerGroupRequest {
  /**
   * Represents a group of customer profiles.
   * Customer groups can be created, be modified, and have their membership defined using
   * the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
   */
  group: CustomerGroup;
}

export const updateCustomerGroupRequestSchema: Schema<UpdateCustomerGroupRequest> = object(
  { group: ['group', lazy(() => customerGroupSchema)] }
);
