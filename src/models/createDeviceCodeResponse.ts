import { array, lazy, object, optional, Schema } from '../schema';
import { DeviceCode, deviceCodeSchema } from './deviceCode';
import { Error, errorSchema } from './error';

export interface CreateDeviceCodeResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  deviceCode?: DeviceCode;
}

export const createDeviceCodeResponseSchema: Schema<CreateDeviceCodeResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    deviceCode: ['device_code', optional(lazy(() => deviceCodeSchema))],
  }
);
