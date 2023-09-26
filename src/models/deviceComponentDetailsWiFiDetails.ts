import {
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  DeviceComponentDetailsMeasurement,
  deviceComponentDetailsMeasurementSchema,
} from './deviceComponentDetailsMeasurement';

export interface DeviceComponentDetailsWiFiDetails {
  /** A boolean to represent whether the WiFI interface is currently active. */
  active?: boolean | null;
  /** The name of the connected WIFI network. */
  ssid?: string | null;
  /** The string representation of the device’s IPv4 address. */
  ipAddressV4?: string | null;
  /**
   * The security protocol for a secure connection (e.g. WPA2). None provided if the connection
   * is unsecured.
   */
  secureConnection?: string | null;
  /** A value qualified by unit of measure. */
  signalStrength?: DeviceComponentDetailsMeasurement;
}

export const deviceComponentDetailsWiFiDetailsSchema: Schema<DeviceComponentDetailsWiFiDetails> = object(
  {
    active: ['active', optional(nullable(boolean()))],
    ssid: ['ssid', optional(nullable(string()))],
    ipAddressV4: ['ip_address_v4', optional(nullable(string()))],
    secureConnection: ['secure_connection', optional(nullable(string()))],
    signalStrength: [
      'signal_strength',
      optional(lazy(() => deviceComponentDetailsMeasurementSchema)),
    ],
  }
);
