import { lazy, object, Schema, string } from '../schema';
import { DeviceCode, deviceCodeSchema } from './deviceCode';

export interface CreateDeviceCodeRequest {
  /**
   * A unique string that identifies this CreateCheckout request. Keys can be any valid string but
   * must be unique for every CreateCheckout request.
   * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
   */
  idempotencyKey: string;
  deviceCode: DeviceCode;
}

export const createDeviceCodeRequestSchema: Schema<CreateDeviceCodeRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    deviceCode: ['device_code', lazy(() => deviceCodeSchema)],
  }
);
