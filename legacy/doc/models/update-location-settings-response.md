
# Update Location Settings Response

## Structure

`UpdateLocationSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred when updating the location settings. |
| `locationSettings` | [`CheckoutLocationSettings \| undefined`](../../doc/models/checkout-location-settings.md) | Optional | - |

## Example (as JSON)

```json
{
  "location_settings": {
    "branding": {
      "button_color": "#00b23b",
      "button_shape": "ROUNDED",
      "header_type": "FRAMED_LOGO"
    },
    "customer_notes_enabled": false,
    "location_id": "LOCATION_ID_1",
    "policies": [
      {
        "description": "This is my Return Policy",
        "title": "Return Policy",
        "uid": "POLICY_ID_1"
      },
      {
        "description": "Items may be returned within 30 days of purchase.",
        "title": "Return Policy",
        "uid": "POLICY_ID_2"
      }
    ],
    "tipping": {
      "default_percent": 20,
      "default_whole_amount_money": {
        "amount": 100,
        "currency": "USD"
      },
      "percentages": [
        15,
        20,
        25
      ],
      "smart_tipping_enabled": true,
      "whole_amounts": [
        {
          "amount": 1000,
          "currency": "USD"
        },
        {
          "amount": 1500,
          "currency": "USD"
        },
        {
          "amount": 2000,
          "currency": "USD"
        }
      ],
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
    },
    "updated_at": "2022-06-16T22:25:35Z"
  },
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

