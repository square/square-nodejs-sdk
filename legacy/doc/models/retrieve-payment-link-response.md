
# Retrieve Payment Link Response

## Structure

`RetrievePaymentLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `paymentLink` | [`PaymentLink \| undefined`](../../doc/models/payment-link.md) | Optional | - |

## Example (as JSON)

```json
{
  "payment_link": {
    "created_at": "2022-04-26T00:10:29Z",
    "id": "LLO5Q3FRCFICDB4B",
    "long_url": "https://checkout.square.site/EXAMPLE",
    "order_id": "4uKASDATqSd1QQ9jV86sPhMdVEbSJc4F",
    "url": "https://square.link/u/EXAMPLE",
    "version": 1,
    "description": "description2",
    "checkout_options": {
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
    }
  ]
}
```

