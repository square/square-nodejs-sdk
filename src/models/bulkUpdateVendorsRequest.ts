import { dict, lazy, object, Schema } from '../schema';
import {
  UpdateVendorRequest,
  updateVendorRequestSchema,
} from './updateVendorRequest';

/** Represents an input to a call to [BulkUpdateVendors]($e/Vendors/BulkUpdateVendors). */
export interface BulkUpdateVendorsRequest {
  /**
   * A set of [UpdateVendorRequest](entity:UpdateVendorRequest) objects encapsulating to-be-updated [Vendor](entity:Vendor)
   * objects. The set is represented by  a collection of `Vendor`-ID/`UpdateVendorRequest`-object pairs.
   */
  vendors: Record<string, UpdateVendorRequest>;
}

export const bulkUpdateVendorsRequestSchema: Schema<BulkUpdateVendorsRequest> = object(
  { vendors: ['vendors', dict(lazy(() => updateVendorRequestSchema))] }
);
