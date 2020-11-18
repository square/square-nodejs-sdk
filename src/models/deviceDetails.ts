import { object, optional, Schema, string } from '../schema';

/** Details about the device that took the payment. */
export interface DeviceDetails {
  /** The Square-issued ID of the device. */
  deviceId?: string;
  /** The Square-issued installation ID for the device. */
  deviceInstallationId?: string;
  /** The name of the device set by the seller. */
  deviceName?: string;
}

export const deviceDetailsSchema: Schema<DeviceDetails> = object({
  deviceId: ['device_id', optional(string())],
  deviceInstallationId: ['device_installation_id', optional(string())],
  deviceName: ['device_name', optional(string())],
});
