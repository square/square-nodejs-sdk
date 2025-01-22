
# Component

The wrapper object for the component entries of a given component type.

## Structure

`Component`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`string`](../../doc/models/component-component-type.md) | Required | An enum for ComponentType. |
| `applicationDetails` | [`DeviceComponentDetailsApplicationDetails \| undefined`](../../doc/models/device-component-details-application-details.md) | Optional | - |
| `cardReaderDetails` | [`DeviceComponentDetailsCardReaderDetails \| undefined`](../../doc/models/device-component-details-card-reader-details.md) | Optional | - |
| `batteryDetails` | [`DeviceComponentDetailsBatteryDetails \| undefined`](../../doc/models/device-component-details-battery-details.md) | Optional | - |
| `wifiDetails` | [`DeviceComponentDetailsWiFiDetails \| undefined`](../../doc/models/device-component-details-wi-fi-details.md) | Optional | - |
| `ethernetDetails` | [`DeviceComponentDetailsEthernetDetails \| undefined`](../../doc/models/device-component-details-ethernet-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "BATTERY",
  "application_details": {
    "application_type": "TERMINAL_API",
    "version": "version4",
    "session_location": "session_location0",
    "device_code_id": "device_code_id2"
  },
  "card_reader_details": {
    "version": "version0"
  },
  "battery_details": {
    "visible_percent": 108,
    "external_power": "AVAILABLE_CHARGING"
  },
  "wifi_details": {
    "active": false,
    "ssid": "ssid8",
    "ip_address_v4": "ip_address_v42",
    "secure_connection": "secure_connection8",
    "signal_strength": {
      "value": 222
    }
  },
  "ethernet_details": {
    "active": false,
    "ip_address_v4": "ip_address_v42"
  }
}
```

