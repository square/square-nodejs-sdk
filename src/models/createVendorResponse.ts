import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Vendor, vendorSchema } from './vendor';

/** Represents an output from a call to [CreateVendor]($e/Vendors/CreateVendor). */
export interface CreateVendorResponse {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /** Represents a supplier to a seller. */
  vendor?: Vendor;
}

export const createVendorResponseSchema: Schema<CreateVendorResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  vendor: ['vendor', optional(lazy(() => vendorSchema))],
});
