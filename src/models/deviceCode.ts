import { nullable, object, optional, Schema, string } from '../schema';

export interface DeviceCode {
  /** The unique id for this device code. */
  id?: string;
  /** An optional user-defined name for the device code. */
  name?: string | null;
  /** The unique code that can be used to login. */
  code?: string;
  /** The unique id of the device that used this code. Populated when the device is paired up. */
  deviceId?: string;
  productType: string;
  /** The location assigned to this code. */
  locationId?: string | null;
  /** DeviceCode.Status enum. */
  status?: string;
  /** When this DeviceCode will expire and no longer login. Timestamp in RFC 3339 format. */
  pairBy?: string;
  /** When this DeviceCode was created. Timestamp in RFC 3339 format. */
  createdAt?: string;
  /** When this DeviceCode's status was last changed. Timestamp in RFC 3339 format. */
  statusChangedAt?: string;
  /** When this DeviceCode was paired. Timestamp in RFC 3339 format. */
  pairedAt?: string;
}

export const deviceCodeSchema: Schema<DeviceCode> = object({
  id: ['id', optional(string())],
  name: ['name', optional(nullable(string()))],
  code: ['code', optional(string())],
  deviceId: ['device_id', optional(string())],
  productType: ['product_type', string()],
  locationId: ['location_id', optional(nullable(string()))],
  status: ['status', optional(string())],
  pairBy: ['pair_by', optional(string())],
  createdAt: ['created_at', optional(string())],
  statusChangedAt: ['status_changed_at', optional(string())],
  pairedAt: ['paired_at', optional(string())],
});
