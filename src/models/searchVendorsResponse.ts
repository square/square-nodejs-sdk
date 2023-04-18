import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Vendor, vendorSchema } from './vendor';

/** Represents an output from a call to [SearchVendors]($e/Vendors/SearchVendors). */
export interface SearchVendorsResponse {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /** The [Vendor](entity:Vendor) objects matching the specified search filter. */
  vendors?: Vendor[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset,
   * this is the final response.
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   */
  cursor?: string;
}

export const searchVendorsResponseSchema: Schema<SearchVendorsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    vendors: ['vendors', optional(array(lazy(() => vendorSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
