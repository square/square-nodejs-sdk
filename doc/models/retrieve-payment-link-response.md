
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
          "title": "title1"
        },
        {
          "title": "title2"
        }
      ],
      "subscription_plan_id": "subscription_plan_id0",
      "redirect_url": "redirect_url4",
      "merchant_support_email": "merchant_support_email0"
    },
    "pre_populated_data": {
      "buyer_email": "buyer_email6",
      "buyer_phone_number": "buyer_phone_number8",
      "buyer_address": {
        "address_line_1": "address_line_14",
        "address_line_2": "address_line_24",
        "address_line_3": "address_line_30",
        "locality": "locality4",
        "sublocality": "sublocality4"
      }
    }
  },
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "REFUND_ALREADY_PENDING",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "PAYMENT_NOT_REFUNDABLE",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "REFUND_DECLINED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

