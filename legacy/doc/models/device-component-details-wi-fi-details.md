
# Device Component Details Wi Fi Details

## Structure

`DeviceComponentDetailsWiFiDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | `boolean \| null \| undefined` | Optional | A boolean to represent whether the WiFI interface is currently active. |
| `ssid` | `string \| null \| undefined` | Optional | The name of the connected WIFI network. |
| `ipAddressV4` | `string \| null \| undefined` | Optional | The string representation of the device’s IPv4 address. |
| `secureConnection` | `string \| null \| undefined` | Optional | The security protocol for a secure connection (e.g. WPA2). None provided if the connection<br>is unsecured. |
| `signalStrength` | [`DeviceComponentDetailsMeasurement \| undefined`](../../doc/models/device-component-details-measurement.md) | Optional | A value qualified by unit of measure. |

## Example (as JSON)

```json
{
  "active": false,
  "ssid": "ssid6",
  "ip_address_v4": "ip_address_v40",
  "secure_connection": "secure_connection6",
  "signal_strength": {
    "value": 222
  }
}
```

