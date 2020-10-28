import { lazy, object, Schema } from '../schema';
import { CustomerGroup, customerGroupSchema } from './customerGroup';

/**
 * Defines the body parameters that can be provided in a request to the
 * [UpdateCustomerGroup](#endpoint-updatecustomergroup) endpoint.
 */
export interface UpdateCustomerGroupRequest {
  /**
   * Represents a group of customer profiles.
   * Customer groups can be created, modified, and have their membership defined either via
   * the Customers API or within Customer Directory in the Square Dashboard or Point of Sale.
   */
  group: CustomerGroup;
}

export const updateCustomerGroupRequestSchema: Schema<UpdateCustomerGroupRequest> = object(
  { group: ['group', lazy(() => customerGroupSchema)] }
);
