import { lazy, object, optional, Schema, string } from '../schema';
import { CustomerGroup, customerGroupSchema } from './customerGroup';

/**
 * Defines the body parameters that can be provided in a request to the
 * [CreateCustomerGroup](#endpoint-createcustomegroup) endpoint.
 */
export interface CreateCustomerGroupRequest {
  /**
   * The idempotency key for the request. See the [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency)
   * guide for more information.
   */
  idempotencyKey?: string;
  /**
   * Represents a group of customer profiles.
   * Customer groups can be created, modified, and have their membership defined either via
   * the Customers API or within Customer Directory in the Square Dashboard or Point of Sale.
   */
  group: CustomerGroup;
}

export const createCustomerGroupRequestSchema: Schema<CreateCustomerGroupRequest> = object(
  {
    idempotencyKey: ['idempotency_key', optional(string())],
    group: ['group', lazy(() => customerGroupSchema)],
  }
);
