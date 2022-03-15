import { lazy, object, optional, Schema, string } from '../schema';
import { CustomerGroup, customerGroupSchema } from './customerGroup';

/**
 * Defines the body parameters that can be included in a request to the
 * [CreateCustomerGroup]($e/CustomerGroups/CreateCustomerGroup) endpoint.
 */
export interface CreateCustomerGroupRequest {
  /** The idempotency key for the request. For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency). */
  idempotencyKey?: string;
  /**
   * Represents a group of customer profiles.
   * Customer groups can be created, be modified, and have their membership defined using
   * the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
   */
  group: CustomerGroup;
}

export const createCustomerGroupRequestSchema: Schema<CreateCustomerGroupRequest> = object(
  {
    idempotencyKey: ['idempotency_key', optional(string())],
    group: ['group', lazy(() => customerGroupSchema)],
  }
);
