import { array, lazy, object, optional, Schema } from '../schema';
import { Device, deviceSchema } from './device';
import { Error, errorSchema } from './error';

export interface GetDeviceResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  device?: Device;
}

export const getDeviceResponseSchema: Schema<GetDeviceResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  device: ['device', optional(lazy(() => deviceSchema))],
});
