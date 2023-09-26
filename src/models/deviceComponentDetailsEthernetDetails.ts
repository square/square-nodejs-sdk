import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface DeviceComponentDetailsEthernetDetails {
  /** A boolean to represent whether the Ethernet interface is currently active. */
  active?: boolean | null;
  /** The string representation of the device’s IPv4 address. */
  ipAddressV4?: string | null;
}

export const deviceComponentDetailsEthernetDetailsSchema: Schema<DeviceComponentDetailsEthernetDetails> = object(
  {
    active: ['active', optional(nullable(boolean()))],
    ipAddressV4: ['ip_address_v4', optional(nullable(string()))],
  }
);
