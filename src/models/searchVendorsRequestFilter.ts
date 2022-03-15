import { array, object, optional, Schema, string } from '../schema';

/** Defines supported query expressions to search for vendors by. */
export interface SearchVendorsRequestFilter {
  /** The names of the [Vendor]($m/Vendor) objects to retrieve. */
  name?: string[];
  /**
   * The statuses of the [Vendor]($m/Vendor) objects to retrieve.
   * See [VendorStatus](#type-vendorstatus) for possible values
   */
  status?: string[];
}

export const searchVendorsRequestFilterSchema: Schema<SearchVendorsRequestFilter> = object(
  {
    name: ['name', optional(array(string()))],
    status: ['status', optional(array(string()))],
  }
);
