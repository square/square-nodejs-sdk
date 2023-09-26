
# Device Metadata

## Structure

`DeviceMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batteryPercentage` | `string \| null \| undefined` | Optional | The Terminal’s remaining battery percentage, between 1-100. |
| `chargingState` | `string \| null \| undefined` | Optional | The current charging state of the Terminal.<br>Options: `CHARGING`, `NOT_CHARGING` |
| `locationId` | `string \| null \| undefined` | Optional | The ID of the Square seller business location associated with the Terminal. |
| `merchantId` | `string \| null \| undefined` | Optional | The ID of the Square merchant account that is currently signed-in to the Terminal. |
| `networkConnectionType` | `string \| null \| undefined` | Optional | The Terminal’s current network connection type.<br>Options: `WIFI`, `ETHERNET` |
| `paymentRegion` | `string \| null \| undefined` | Optional | The country in which the Terminal is authorized to take payments. |
| `serialNumber` | `string \| null \| undefined` | Optional | The unique identifier assigned to the Terminal, which can be found on the lower back<br>of the device. |
| `osVersion` | `string \| null \| undefined` | Optional | The current version of the Terminal’s operating system. |
| `appVersion` | `string \| null \| undefined` | Optional | The current version of the application running on the Terminal. |
| `wifiNetworkName` | `string \| null \| undefined` | Optional | The name of the Wi-Fi network to which the Terminal is connected. |
| `wifiNetworkStrength` | `string \| null \| undefined` | Optional | The signal strength of the Wi-FI network connection.<br>Options: `POOR`, `FAIR`, `GOOD`, `EXCELLENT` |
| `ipAddress` | `string \| null \| undefined` | Optional | The IP address of the Terminal. |

## Example (as JSON)

```json
{
  "battery_percentage": "battery_percentage4",
  "charging_state": "charging_state6",
  "location_id": "location_id2",
  "merchant_id": "merchant_id8",
  "network_connection_type": "network_connection_type8"
}
```

