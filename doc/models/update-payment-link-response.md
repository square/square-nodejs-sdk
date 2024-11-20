
# Update Payment Link Response

## Structure

`UpdatePaymentLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred when updating the payment link. |
| `paymentLink` | [`PaymentLink \| undefined`](../../doc/models/payment-link.md) | Optional | - |

## Example (as JSON)

```json
{
  "payment_link": {
    "checkout_options": {
      "ask_for_shipping_address": true,
      "allow_tipping": false,
      "custom_fields": [
        {
          "title": "title8"
        },
        {
          "title": "title8"
        }
      ],
      "subscription_plan_id": "subscription_plan_id8",
      "redirect_url": "redirect_url2",
      "merchant_support_email": "merchant_support_email8"
    },
    "created_at": "2022-04-26T00:15:15Z",
    "id": "TY4BWEDJ6AI5MBIV",
    "long_url": "https://checkout.square.site/EXAMPLE",
    "order_id": "Qqc8ypQGvxVwc46Cch4zHTaJqc4F",
    "payment_note": "test",
    "updated_at": "2022-04-26T00:18:24Z",
    "url": "https://square.link/u/EXAMPLE",
    "version": 2,
    "description": "description2",
    "pre_populated_data": {
      "buyer_email": "buyer_email8",
      "buyer_phone_number": "buyer_phone_number0",
      "buyer_address": {
        "address_line_1": "address_line_12",
        "address_line_2": "address_line_22",
        "address_line_3": "address_line_38",
        "locality": "locality2",
        "sublocality": "sublocality2"
      }
    }
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

