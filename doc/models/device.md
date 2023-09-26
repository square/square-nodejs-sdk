
# Device

## Structure

`Device`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A synthetic identifier for the device. The identifier includes a standardized prefix and<br>is otherwise an opaque id generated from key device fields. |
| `attributes` | [`DeviceAttributes`](../../doc/models/device-attributes.md) | Required | - |
| `components` | [`Component[] \| null \| undefined`](../../doc/models/component.md) | Optional | A list of components applicable to the device. |
| `status` | [`DeviceStatus \| undefined`](../../doc/models/device-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "attributes": {
    "type": "TERMINAL",
    "manufacturer": "manufacturer2",
    "model": "model2",
    "name": "name4",
    "manufacturers_id": "manufacturers_id0",
    "updated_at": "updated_at0",
    "version": "version0"
  },
  "id": "id0",
  "components": [
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
    },
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
    },
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
  ],
  "status": {
    "category": "AVAILABLE"
  }
}
```

