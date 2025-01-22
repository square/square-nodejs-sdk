
# List Devices Response

## Structure

`ListDevicesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information about errors that occurred during the request. |
| `devices` | [`Device[] \| undefined`](../../doc/models/device.md) | Optional | The requested list of `Device` objects. |
| `cursor` | `string \| undefined` | Optional | The pagination cursor to be used in a subsequent request. If empty,<br>this is the final response.<br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information. |

## Example (as JSON)

```json
{
  "cursor": "GcXjlV2iaizH7R0fMT6wUDbw6l4otigjzx8XOOspUKHo9EPLRByM",
  "devices": [
    {
      "attributes": {
        "manufacturer": "Square",
        "manufacturers_id": "995CS397A6475287",
        "merchant_token": "MLCHNZCBWFDZB",
        "model": "T2",
        "name": "Square Terminal 995",
        "type": "TERMINAL",
        "updated_at": "2023-09-29T13:04:56.335762883Z",
        "version": "5.41.0085"
      },
      "components": [
        {
          "application_details": {
            "application_type": "TERMINAL_API",
            "session_location": "LMN2K7S3RTOU3",
            "version": "6.25",
            "device_code_id": "device_code_id2"
          },
          "type": "APPLICATION",
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
          "card_reader_details": {
            "version": "3.53.70"
          },
          "type": "CARD_READER",
          "application_details": {
            "application_type": "TERMINAL_API",
            "version": "version4",
            "session_location": "session_location0",
            "device_code_id": "device_code_id2"
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
          "battery_details": {
            "external_power": "AVAILABLE_CHARGING",
            "visible_percent": 5
          },
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
          "type": "WIFI",
          "wifi_details": {
            "active": true,
            "ip_address_v4": "10.0.0.7",
            "secure_connection": "WPA/WPA2 PSK",
            "signal_strength": {
              "value": 2
            },
            "ssid": "Staff Network"
          },
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
          "ethernet_details": {
            "active": false,
            "ip_address_v4": "ip_address_v42"
          }
        },
        {
          "ethernet_details": {
            "active": false
          },
          "type": "ETHERNET",
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
          }
        }
      ],
      "id": "device:995CS397A6475287",
      "status": {
        "category": "AVAILABLE"
      }
    },
    {
      "attributes": {
        "manufacturer": "Square",
        "manufacturers_id": "995CS234B5493559",
        "merchant_token": "MLCHXZCBWFGDW",
        "model": "T2",
        "name": "Square Terminal 995",
        "type": "TERMINAL",
        "updated_at": "2023-09-29T12:39:56.335742073Z",
        "version": "5.41.0085"
      },
      "components": [
        {
          "application_details": {
            "application_type": "TERMINAL_API",
            "session_location": "LMN2K7S3RTOU3",
            "version": "6.25"
          },
          "type": "APPLICATION",
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
          "card_reader_details": {
            "version": "3.53.70"
          },
          "type": "CARD_READER",
          "application_details": {
            "application_type": "TERMINAL_API",
            "version": "version4",
            "session_location": "session_location0",
            "device_code_id": "device_code_id2"
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
          "battery_details": {
            "external_power": "AVAILABLE_CHARGING",
            "visible_percent": 24
          },
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
          "type": "WIFI",
          "wifi_details": {
            "active": true,
            "ip_address_v4": "10.0.0.7",
            "secure_connection": "WPA/WPA2 PSK",
            "signal_strength": {
              "value": 2
            },
            "ssid": "Staff Network"
          },
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
          "ethernet_details": {
            "active": false,
            "ip_address_v4": "ip_address_v42"
          }
        },
        {
          "ethernet_details": {
            "active": false
          },
          "type": "ETHERNET",
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
          }
        }
      ],
      "id": "device:995CS234B5493559",
      "status": {
        "category": "NEEDS_ATTENTION"
      }
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

