import { array, lazy, object, optional, Schema, string } from '../schema';
import { Device, deviceSchema } from './device';
import { Error, errorSchema } from './error';

export interface ListDevicesResponse {
  /** Information about errors that occurred during the request. */
  errors?: Error[];
  /** The requested list of `Device` objects. */
  devices?: Device[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty,
   * this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
   */
  cursor?: string;
}

export const listDevicesResponseSchema: Schema<ListDevicesResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  devices: ['devices', optional(array(lazy(() => deviceSchema)))],
  cursor: ['cursor', optional(string())],
});
