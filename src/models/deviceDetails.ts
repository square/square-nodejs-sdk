import { object, optional, Schema, string } from '../schema';

/** Details about the device that took the payment. */
export interface DeviceDetails {
  /** Square-issued ID of the device. */
  deviceId?: string;
  /** The name of the device set by the merchant. */
  deviceName?: string;
}

export const deviceDetailsSchema: Schema<DeviceDetails> = object({
  deviceId: ['device_id', optional(string())],
  deviceName: ['device_name', optional(string())],
});
