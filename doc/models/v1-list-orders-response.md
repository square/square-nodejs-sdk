
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
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "UNSUPPORTED_ENTRY_METHOD",
          "detail": "detail8",
          "field": "field6"
        },
        {
          "category": "API_ERROR",
          "code": "INVALID_ENCRYPTED_CARD",
          "detail": "detail9",
          "field": "field7"
        },
        {
          "category": "AUTHENTICATION_ERROR",
          "code": "INVALID_CARD",
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
          "category": "API_ERROR",
          "code": "INVALID_ENCRYPTED_CARD",
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

