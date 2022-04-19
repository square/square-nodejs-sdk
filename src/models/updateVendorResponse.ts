import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Vendor, vendorSchema } from './vendor';

/** Represents an output from a call to [UpdateVendor]($e/Vendors/UpdateVendor). */
export interface UpdateVendorResponse {
  /** Errors occurred when the request fails. */
  errors?: Error[];
  /** Represents a supplier to a seller. */
  vendor?: Vendor;
}

export const updateVendorResponseSchema: Schema<UpdateVendorResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  vendor: ['vendor', optional(lazy(() => vendorSchema))],
});
