import { array, lazy, object, optional, Schema } from '../schema';
import { CustomerGroup, customerGroupSchema } from './customerGroup';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [RetrieveCustomerGroup](#endpoint-retrievecustomergroup) endpoint.
 * One of `errors` or `group` is present in a given response (never both).
 */
export interface RetrieveCustomerGroupResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a group of customer profiles.
   * Customer groups can be created, modified, and have their membership defined either via
   * the Customers API or within Customer Directory in the Square Dashboard or Point of Sale.
   */
  group?: CustomerGroup;
}

export const retrieveCustomerGroupResponseSchema: Schema<RetrieveCustomerGroupResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    group: ['group', optional(lazy(() => customerGroupSchema))],
  }
);
