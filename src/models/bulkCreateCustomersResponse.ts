import { array, dict, lazy, object, optional, Schema } from '../schema';
import {
  CreateCustomerResponse,
  createCustomerResponseSchema,
} from './createCustomerResponse';
import { Error, errorSchema } from './error';

/**
 * Defines the fields included in the response body from the
 * [BulkCreateCustomers]($e/Customers/BulkCreateCustomers) endpoint.
 */
export interface BulkCreateCustomersResponse {
  /**
   * A map of responses that correspond to individual create requests, represented by
   * key-value pairs.
   * Each key is the idempotency key that was provided for a create request and each value
   * is the corresponding response.
   * If the request succeeds, the value is the new customer profile.
   * If the request fails, the value contains any errors that occurred during the request.
   */
  responses?: Record<string, CreateCustomerResponse>;
  /** Any top-level errors that prevented the bulk operation from running. */
  errors?: Error[];
}

export const bulkCreateCustomersResponseSchema: Schema<BulkCreateCustomersResponse> = object(
  {
    responses: [
      'responses',
      optional(dict(lazy(() => createCustomerResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
