import { nullable, object, optional, Schema, string } from '../schema';

export interface DeviceAttributes {
  /** An enum identifier of the device type. */
  type: string;
  /** The maker of the device. */
  manufacturer: string;
  /** The specific model of the device. */
  model?: string | null;
  /** A seller-specified name for the device. */
  name?: string | null;
  /**
   * The manufacturer-supplied identifier for the device (where available). In many cases,
   * this identifier will be a serial number.
   */
  manufacturersId?: string | null;
  /**
   * The RFC 3339-formatted value of the most recent update to the device information.
   * (Could represent any field update on the device.)
   */
  updatedAt?: string;
  /** The current version of software installed on the device. */
  version?: string;
  /** The merchant_token identifying the merchant controlling the device. */
  merchantToken?: string | null;
}

export const deviceAttributesSchema: Schema<DeviceAttributes> = object({
  type: ['type', string()],
  manufacturer: ['manufacturer', string()],
  model: ['model', optional(nullable(string()))],
  name: ['name', optional(nullable(string()))],
  manufacturersId: ['manufacturers_id', optional(nullable(string()))],
  updatedAt: ['updated_at', optional(string())],
  version: ['version', optional(string())],
  merchantToken: ['merchant_token', optional(nullable(string()))],
});
