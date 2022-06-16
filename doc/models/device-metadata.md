
# Device Metadata

## Structure

`DeviceMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batteryPercentage` | `string \| undefined` | Optional | The Terminal’s remaining battery percentage, between 1-100. |
| `chargingState` | `string \| undefined` | Optional | The current charging state of the Terminal.<br>Options: `CHARGING`, `NOT_CHARGING` |
| `locationId` | `string \| undefined` | Optional | The ID of the Square seller business location associated with the Terminal. |
| `merchantId` | `string \| undefined` | Optional | The ID of the Square merchant account that is currently signed-in to the Terminal. |
| `networkConnectionType` | `string \| undefined` | Optional | The Terminal’s current network connection type.<br>Options: `WIFI`, `ETHERNET` |
| `paymentRegion` | `string \| undefined` | Optional | The country in which the Terminal is authorized to take payments. |
| `serialNumber` | `string \| undefined` | Optional | The unique identifier assigned to the Terminal, which can be found on the lower back<br>of the device. |
| `osVersion` | `string \| undefined` | Optional | The current version of the Terminal’s operating system. |
| `appVersion` | `string \| undefined` | Optional | The current version of the application running on the Terminal. |
| `wifiNetworkName` | `string \| undefined` | Optional | The name of the Wi-Fi network to which the Terminal is connected. |
| `wifiNetworkStrength` | `string \| undefined` | Optional | The signal strength of the Wi-FI network connection.<br>Options: `POOR`, `FAIR`, `GOOD`, `EXCELLENT` |
| `ipAddress` | `string \| undefined` | Optional | The IP address of the Terminal. |

## Example (as JSON)

```json
{
  "battery_percentage": null,
  "charging_state": null,
  "location_id": null,
  "merchant_id": null,
  "network_connection_type": null,
  "payment_region": null,
  "serial_number": null,
  "os_version": null,
  "app_version": null,
  "wifi_network_name": null,
  "wifi_network_strength": null,
  "ip_address": null
}
```

