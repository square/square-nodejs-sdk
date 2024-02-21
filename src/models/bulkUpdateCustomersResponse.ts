import { array, dict, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  UpdateCustomerResponse,
  updateCustomerResponseSchema,
} from './updateCustomerResponse';

/**
 * Defines the fields included in the response body from the
 * [BulkUpdateCustomers]($e/Customers/BulkUpdateCustomers) endpoint.
 */
export interface BulkUpdateCustomersResponse {
  /**
   * A map of responses that correspond to individual update requests, represented by
   * key-value pairs.
   * Each key is the customer ID that was specified for an update request and each value
   * is the corresponding response.
   * If the request succeeds, the value is the updated customer profile.
   * If the request fails, the value contains any errors that occurred during the request.
   */
  responses?: Record<string, UpdateCustomerResponse>;
  /** Any top-level errors that prevented the bulk operation from running. */
  errors?: Error[];
}

export const bulkUpdateCustomersResponseSchema: Schema<BulkUpdateCustomersResponse> = object(
  {
    responses: [
      'responses',
      optional(dict(lazy(() => updateCustomerResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
