
# V1 List Orders Response

## Structure

`V1ListOrdersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1Order[] \| undefined`](../../doc/models/v1-order.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "errors": [
        {
          "category": "API_ERROR",
          "code": "REFUND_ALREADY_PENDING",
          "detail": "detail8",
          "field": "field6"
        },
        {
          "category": "AUTHENTICATION_ERROR",
          "code": "PAYMENT_NOT_REFUNDABLE",
          "detail": "detail9",
          "field": "field7"
        },
        {
          "category": "INVALID_REQUEST_ERROR",
          "code": "REFUND_DECLINED",
          "detail": "detail0",
          "field": "field8"
        }
      ],
      "id": "id7",
      "buyer_email": "buyer_email1",
      "recipient_name": "recipient_name5",
      "recipient_phone_number": "recipient_phone_number7"
    },
    {
      "errors": [
        {
          "category": "AUTHENTICATION_ERROR",
          "code": "PAYMENT_NOT_REFUNDABLE",
          "detail": "detail9",
          "field": "field7"
        }
      ],
      "id": "id8",
      "buyer_email": "buyer_email0",
      "recipient_name": "recipient_name6",
      "recipient_phone_number": "recipient_phone_number6"
    }
  ]
}
```

