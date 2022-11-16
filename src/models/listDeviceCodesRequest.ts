import { array, nullable, object, optional, Schema, string } from '../schema';

export interface ListDeviceCodesRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for your original query.
   * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
   */
  cursor?: string | null;
  /**
   * If specified, only returns DeviceCodes of the specified location.
   * Returns DeviceCodes of all locations if empty.
   */
  locationId?: string | null;
  productType?: string;
  /**
   * If specified, returns DeviceCodes with the specified statuses.
   * Returns DeviceCodes of status `PAIRED` and `UNPAIRED` if empty.
   * See [DeviceCodeStatus](#type-devicecodestatus) for possible values
   */
  status?: string[] | null;
}

export const listDeviceCodesRequestSchema: Schema<ListDeviceCodesRequest> = object(
  {
    cursor: ['cursor', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    productType: ['product_type', optional(string())],
    status: ['status', optional(nullable(array(string())))],
  }
);
