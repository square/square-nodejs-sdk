import { array, nullable, object, optional, Schema, string } from '../schema';

/** Represents an input to a call to [BulkRetrieveVendors]($e/Vendors/BulkRetrieveVendors). */
export interface BulkRetrieveVendorsRequest {
  /** IDs of the [Vendor](entity:Vendor) objects to retrieve. */
  vendorIds?: string[] | null;
}

export const bulkRetrieveVendorsRequestSchema: Schema<BulkRetrieveVendorsRequest> = object(
  { vendorIds: ['vendor_ids', optional(nullable(array(string())))] }
);
