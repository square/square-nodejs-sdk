import { nullable, object, optional, Schema, string } from '../schema';

export interface DeviceMetadata {
  /** The Terminal’s remaining battery percentage, between 1-100. */
  batteryPercentage?: string | null;
  /**
   * The current charging state of the Terminal.
   * Options: `CHARGING`, `NOT_CHARGING`
   */
  chargingState?: string | null;
  /** The ID of the Square seller business location associated with the Terminal. */
  locationId?: string | null;
  /** The ID of the Square merchant account that is currently signed-in to the Terminal. */
  merchantId?: string | null;
  /**
   * The Terminal’s current network connection type.
   * Options: `WIFI`, `ETHERNET`
   */
  networkConnectionType?: string | null;
  /** The country in which the Terminal is authorized to take payments. */
  paymentRegion?: string | null;
  /**
   * The unique identifier assigned to the Terminal, which can be found on the lower back
   * of the device.
   */
  serialNumber?: string | null;
  /** The current version of the Terminal’s operating system. */
  osVersion?: string | null;
  /** The current version of the application running on the Terminal. */
  appVersion?: string | null;
  /** The name of the Wi-Fi network to which the Terminal is connected. */
  wifiNetworkName?: string | null;
  /**
   * The signal strength of the Wi-FI network connection.
   * Options: `POOR`, `FAIR`, `GOOD`, `EXCELLENT`
   */
  wifiNetworkStrength?: string | null;
  /** The IP address of the Terminal. */
  ipAddress?: string | null;
}

export const deviceMetadataSchema: Schema<DeviceMetadata> = object({
  batteryPercentage: ['battery_percentage', optional(nullable(string()))],
  chargingState: ['charging_state', optional(nullable(string()))],
  locationId: ['location_id', optional(nullable(string()))],
  merchantId: ['merchant_id', optional(nullable(string()))],
  networkConnectionType: [
    'network_connection_type',
    optional(nullable(string())),
  ],
  paymentRegion: ['payment_region', optional(nullable(string()))],
  serialNumber: ['serial_number', optional(nullable(string()))],
  osVersion: ['os_version', optional(nullable(string()))],
  appVersion: ['app_version', optional(nullable(string()))],
  wifiNetworkName: ['wifi_network_name', optional(nullable(string()))],
  wifiNetworkStrength: ['wifi_network_strength', optional(nullable(string()))],
  ipAddress: ['ip_address', optional(nullable(string()))],
});
