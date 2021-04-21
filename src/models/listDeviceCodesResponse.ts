import { array, lazy, object, optional, Schema, string } from '../schema';
import { DeviceCode, deviceCodeSchema } from './deviceCode';
import { Error, errorSchema } from './error';

export interface ListDeviceCodesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The queried DeviceCode. */
  deviceCodes?: DeviceCode[];
  /**
   * A pagination cursor to retrieve the next set of results for your
   * original query to the endpoint. This value is present only if the request
   * succeeded and additional results are available.
   * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
   */
  cursor?: string;
}

export const listDeviceCodesResponseSchema: Schema<ListDeviceCodesResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    deviceCodes: [
      'device_codes',
      optional(array(lazy(() => deviceCodeSchema))),
    ],
    cursor: ['cursor', optional(string())],
  }
);
