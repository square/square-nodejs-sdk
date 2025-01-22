
# Retrieve Location Settings Response

## Structure

`RetrieveLocationSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `locationSettings` | [`CheckoutLocationSettings \| undefined`](../../doc/models/checkout-location-settings.md) | Optional | - |

## Example (as JSON)

```json
{
  "location_settings": {
    "branding": {
      "button_color": "#ffffff",
      "button_shape": "ROUNDED",
      "header_type": "FRAMED_LOGO"
    },
    "customer_notes_enabled": true,
    "location_id": "LOCATION_ID_1",
    "policies": [
      {
        "description": "This is my Return Policy",
        "title": "Return Policy",
        "uid": "POLICY_ID_1"
      }
    ],
    "tipping": {
      "default_percent": 15,
      "default_whole_amount_money": {
        "amount": 100,
        "currency": "USD"
      },
      "percentages": [
        10,
        15,
        20
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
    }
  ]
}
```

