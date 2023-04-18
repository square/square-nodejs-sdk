import { array, dict, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  RetrieveVendorResponse,
  retrieveVendorResponseSchema,
} from './retrieveVendorResponse';

/** Represents an output from a call to [BulkRetrieveVendors]($e/Vendors/BulkRetrieveVendors). */
export interface BulkRetrieveVendorsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The set of [RetrieveVendorResponse](entity:RetrieveVendorResponse) objects encapsulating successfully retrieved [Vendor](entity:Vendor)
   * objects or error responses for failed attempts. The set is represented by
   * a collection of `Vendor`-ID/`Vendor`-object or `Vendor`-ID/error-object pairs.
   */
  responses?: Record<string, RetrieveVendorResponse>;
}

export const bulkRetrieveVendorsResponseSchema: Schema<BulkRetrieveVendorsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    responses: [
      'responses',
      optional(dict(lazy(() => retrieveVendorResponseSchema))),
    ],
  }
);
