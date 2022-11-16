import { nullable, object, optional, Schema, string } from '../schema';

/** Details about the device that took the payment. */
export interface DeviceDetails {
  /** The Square-issued ID of the device. */
  deviceId?: string | null;
  /** The Square-issued installation ID for the device. */
  deviceInstallationId?: string | null;
  /** The name of the device set by the seller. */
  deviceName?: string | null;
}

export const deviceDetailsSchema: Schema<DeviceDetails> = object({
  deviceId: ['device_id', optional(nullable(string()))],
  deviceInstallationId: [
    'device_installation_id',
    optional(nullable(string())),
  ],
  deviceName: ['device_name', optional(nullable(string()))],
});
