
# Update Location Settings Request

## Structure

`UpdateLocationSettingsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationSettings` | [`CheckoutLocationSettings`](../../doc/models/checkout-location-settings.md) | Required | - |

## Example (as JSON)

```json
{
  "location_settings": {
    "location_id": "location_id0",
    "customer_notes_enabled": false,
    "policies": [
      {
        "uid": "uid8",
        "title": "title4",
        "description": "description8"
      },
      {
        "uid": "uid8",
        "title": "title4",
        "description": "description8"
      },
      {
        "uid": "uid8",
        "title": "title4",
        "description": "description8"
      }
    ],
    "branding": {
      "header_type": "FULL_WIDTH_LOGO",
      "button_color": "button_color2",
      "button_shape": "PILL"
    },
    "tipping": {
      "percentages": [
        246,
        247
      ],
      "smart_tipping_enabled": false,
      "default_percent": 46,
      "smart_tips": [
        {
          "amount": 152,
          "currency": "GEL"
        },
        {
          "amount": 152,
          "currency": "GEL"
        }
      ],
      "default_smart_tip": {
        "amount": 58,
        "currency": "KWD"
      }
    }
  }
}
```

