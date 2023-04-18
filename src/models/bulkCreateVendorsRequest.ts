import { dict, lazy, object, Schema } from '../schema';
import { Vendor, vendorSchema } from './vendor';

/** Represents an input to a call to [BulkCreateVendors]($e/Vendors/BulkCreateVendors). */
export interface BulkCreateVendorsRequest {
  /** Specifies a set of new [Vendor](entity:Vendor) objects as represented by a collection of idempotency-key/`Vendor`-object pairs. */
  vendors: Record<string, Vendor>;
}

export const bulkCreateVendorsRequestSchema: Schema<BulkCreateVendorsRequest> = object(
  { vendors: ['vendors', dict(lazy(() => vendorSchema))] }
);
