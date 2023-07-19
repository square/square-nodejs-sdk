
# List Payment Links Response

## Structure

`ListPaymentLinksResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Errors that occurred during the request. |
| `paymentLinks` | [`PaymentLink[] \| undefined`](../../doc/models/payment-link.md) | Optional | The list of payment links. |
| `cursor` | `string \| undefined` | Optional | When a response is truncated, it includes a cursor that you can use in a subsequent request<br>to retrieve the next set of gift cards. If a cursor is not present, this is the final response.<br>For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). |

## Example (as JSON)

```json
{
  "cursor": "MTY1NQ==",
  "payment_links": [
    {
      "checkout_options": {
        "ask_for_shipping_address": true,
        "allow_tipping": true,
        "custom_fields": [
          {
            "title": "title2"
          },
          {
            "title": "title3"
          }
        ],
        "subscription_plan_id": "subscription_plan_id1",
        "redirect_url": "redirect_url5",
        "merchant_support_email": "merchant_support_email1"
      },
      "created_at": "2022-04-26T00:15:15Z",
      "id": "TN4BWEDJ9AI5MBIV",
      "order_id": "Qqc6yppGvxVwc46Cch4zHTaJqc4F",
      "payment_note": "test",
      "updated_at": "2022-04-26T00:18:24Z",
      "url": "https://square.link/u/EXAMPLE",
      "version": 2,
      "description": "description3",
      "pre_populated_data": {
        "buyer_email": "buyer_email5",
        "buyer_phone_number": "buyer_phone_number3",
        "buyer_address": {
          "address_line_1": "address_line_15",
          "address_line_2": "address_line_25",
          "address_line_3": "address_line_31",
          "locality": "locality5",
          "sublocality": "sublocality5"
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
            "title": "title3"
          },
          {
            "title": "title4"
          },
          {
            "title": "title5"
          }
        ],
        "subscription_plan_id": "subscription_plan_id2",
        "redirect_url": "redirect_url6",
        "merchant_support_email": "merchant_support_email2"
      },
      "pre_populated_data": {
        "buyer_email": "buyer_email6",
        "buyer_phone_number": "buyer_phone_number4",
        "buyer_address": {
          "address_line_1": "address_line_16",
          "address_line_2": "address_line_26",
          "address_line_3": "address_line_32",
          "locality": "locality6",
          "sublocality": "sublocality6"
        }
      }
    }
  ],
  "errors": [
    {
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

