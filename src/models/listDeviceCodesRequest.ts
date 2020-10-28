import { object, optional, Schema, string } from '../schema';

export interface ListDeviceCodesRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for your original query.
   * See [Paginating results](#paginatingresults) for more information.
   */
  cursor?: string;
  /**
   * If specified, only returns DeviceCodes of the specified location.
   * Returns DeviceCodes of all locations if empty.
   */
  locationId?: string;
  productType?: string;
}

export const listDeviceCodesRequestSchema: Schema<ListDeviceCodesRequest> = object(
  {
    cursor: ['cursor', optional(string())],
    locationId: ['location_id', optional(string())],
    productType: ['product_type', optional(string())],
  }
);
