import { array, dict, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  UpdateVendorResponse,
  updateVendorResponseSchema,
} from './updateVendorResponse';

/** Represents an output from a call to [BulkUpdateVendors]($e/Vendors/BulkUpdateVendors). */
export interface BulkUpdateVendorsResponse {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /**
   * A set of [UpdateVendorResponse](entity:UpdateVendorResponse) objects encapsulating successfully created [Vendor](entity:Vendor)
   * objects or error responses for failed attempts. The set is represented by a collection of `Vendor`-ID/`UpdateVendorResponse`-object or
   * `Vendor`-ID/error-object pairs.
   */
  responses?: Record<string, UpdateVendorResponse>;
}

export const bulkUpdateVendorsResponseSchema: Schema<BulkUpdateVendorsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    responses: [
      'responses',
      optional(dict(lazy(() => updateVendorResponseSchema))),
    ],
  }
);
