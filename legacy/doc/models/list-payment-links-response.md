
# List Payment Links Response

## Structure

`ListPaymentLinksResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors that occurred during the request. |
| `paymentLinks` | [`PaymentLink[] \| undefined`](../../doc/models/payment-link.md) | Optional | The list of payment links. |
| `cursor` | `string \| undefined` | Optional | When a response is truncated, it includes a cursor that you can use in a subsequent request<br>to retrieve the next set of gift cards. If a cursor is not present, this is the final response.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
  "cursor": "MTY1NQ==",
  "payment_links": [
    {
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
      "id": "TN4BWEDJ9AI5MBIV",
      "order_id": "Qqc6yppGvxVwc46Cch4zHTaJqc4F",
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
    {
      "created_at": "2022-04-11T23:14:59Z",
      "description": "",
      "id": "RY5UNCUMPJN5XKCT",
      "order_id": "EmBmGt3zJD15QeO1dxzBTxMxtwfZY",
      "url": "https://square.link/u/EXAMPLE",
      "version": 1,
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
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

