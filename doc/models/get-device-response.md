
# Get Device Response

## Structure

`GetDeviceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors encountered during the request. |
| `device` | [`Device \| undefined`](../../doc/models/device.md) | Optional | - |

## Example (as JSON)

```json
{
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail6",
      "field": "field4"
    }
  ],
  "device": {
    "id": "id6",
    "attributes": {
      "type": "type4",
      "manufacturer": "manufacturer2",
      "model": "model2",
      "name": "name4",
      "manufacturers_id": "manufacturers_id0",
      "updated_at": "updated_at0",
      "version": "version0"
    },
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
}
```

