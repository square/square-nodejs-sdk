import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Vendor, vendorSchema } from './vendor';

/** Represents an output from a call to [RetrieveVendor]($e/Vendors/RetrieveVendor). */
export interface RetrieveVendorResponse {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /** Represents a supplier to a seller. */
  vendor?: Vendor;
}

export const retrieveVendorResponseSchema: Schema<RetrieveVendorResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    vendor: ['vendor', optional(lazy(() => vendorSchema))],
  }
);
