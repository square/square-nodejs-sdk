import { nullable, object, optional, Schema, string } from '../schema';

export interface DeviceComponentDetailsNetworkInterfaceDetails {
  /** The string representation of the device’s IPv4 address. */
  ipAddressV4?: string | null;
}

export const deviceComponentDetailsNetworkInterfaceDetailsSchema: Schema<DeviceComponentDetailsNetworkInterfaceDetails> = object(
  { ipAddressV4: ['ip_address_v4', optional(nullable(string()))] }
);
