import { object, optional, Schema, string } from '../schema';

export interface DeviceMetadata {
  /** The Terminal’s remaining battery percentage, between 1-100. */
  batteryPercentage?: string;
  /**
   * The current charging state of the Terminal.
   * Options: `CHARGING`, `NOT_CHARGING`
   */
  chargingState?: string;
  /** The ID of the Square seller business location associated with the Terminal. */
  locationId?: string;
  /** The ID of the Square merchant account that is currently signed-in to the Terminal. */
  merchantId?: string;
  /**
   * The Terminal’s current network connection type.
   * Options: `WIFI`, `ETHERNET`
   */
  networkConnectionType?: string;
  /** The country in which the Terminal is authorized to take payments. */
  paymentRegion?: string;
  /**
   * The unique identifier assigned to the Terminal, which can be found on the lower back
   * of the device.
   */
  serialNumber?: string;
  /** The current version of the Terminal’s operating system. */
  osVersion?: string;
  /** The current version of the application running on the Terminal. */
  appVersion?: string;
  /** The name of the Wi-Fi network to which the Terminal is connected. */
  wifiNetworkName?: string;
  /**
   * The signal strength of the Wi-FI network connection.
   * Options: `POOR`, `FAIR`, `GOOD`, `EXCELLENT`
   */
  wifiNetworkStrength?: string;
  /** The IP address of the Terminal. */
  ipAddress?: string;
}

export const deviceMetadataSchema: Schema<DeviceMetadata> = object({
  batteryPercentage: ['battery_percentage', optional(string())],
  chargingState: ['charging_state', optional(string())],
  locationId: ['location_id', optional(string())],
  merchantId: ['merchant_id', optional(string())],
  networkConnectionType: ['network_connection_type', optional(string())],
  paymentRegion: ['payment_region', optional(string())],
  serialNumber: ['serial_number', optional(string())],
  osVersion: ['os_version', optional(string())],
  appVersion: ['app_version', optional(string())],
  wifiNetworkName: ['wifi_network_name', optional(string())],
  wifiNetworkStrength: ['wifi_network_strength', optional(string())],
  ipAddress: ['ip_address', optional(string())],
});
