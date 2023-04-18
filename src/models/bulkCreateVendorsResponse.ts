import { array, dict, lazy, object, optional, Schema } from '../schema';
import {
  CreateVendorResponse,
  createVendorResponseSchema,
} from './createVendorResponse';
import { Error, errorSchema } from './error';

/** Represents an output from a call to [BulkCreateVendors]($e/Vendors/BulkCreateVendors). */
export interface BulkCreateVendorsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * A set of [CreateVendorResponse](entity:CreateVendorResponse) objects encapsulating successfully created [Vendor](entity:Vendor)
   * objects or error responses for failed attempts. The set is represented by
   * a collection of idempotency-key/`Vendor`-object or idempotency-key/error-object pairs. The idempotency keys correspond to those specified
   * in the input.
   */
  responses?: Record<string, CreateVendorResponse>;
}

export const bulkCreateVendorsResponseSchema: Schema<BulkCreateVendorsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    responses: [
      'responses',
      optional(dict(lazy(() => createVendorResponseSchema))),
    ],
  }
);
