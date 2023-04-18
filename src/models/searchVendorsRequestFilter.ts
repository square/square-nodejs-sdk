import { array, nullable, object, optional, Schema, string } from '../schema';

/** Defines supported query expressions to search for vendors by. */
export interface SearchVendorsRequestFilter {
  /** The names of the [Vendor](entity:Vendor) objects to retrieve. */
  name?: string[] | null;
  /**
   * The statuses of the [Vendor](entity:Vendor) objects to retrieve.
   * See [VendorStatus](#type-vendorstatus) for possible values
   */
  status?: string[] | null;
}

export const searchVendorsRequestFilterSchema: Schema<SearchVendorsRequestFilter> = object(
  {
    name: ['name', optional(nullable(array(string())))],
    status: ['status', optional(nullable(array(string())))],
  }
);
