import { lazy, object, Schema, string } from '../schema';
import { DeviceCode, deviceCodeSchema } from './deviceCode';

export interface CreateDeviceCodeRequest {
  /**
   * A unique string that identifies this CreateDeviceCode request. Keys can
   * be any valid string but must be unique for every CreateDeviceCode request.
   * See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.
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
