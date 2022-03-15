import { array, object, optional, Schema, string } from '../schema';

/** Represents an input to a call to [BulkRetrieveVendors.]($e/Vendors/BulkRetrieveVendors) */
export interface BulkRetrieveVendorsRequest {
  /** IDs of the [Vendor]($m/Vendor) objects to retrieve. */
  vendorIds?: string[];
}

export const bulkRetrieveVendorsRequestSchema: Schema<BulkRetrieveVendorsRequest> = object(
  { vendorIds: ['vendor_ids', optional(array(string()))] }
);
