
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
          "code": "INVALID_EXPIRATION",
          "detail": "detail6",
          "field": "field4"
        }
      ],
      "id": "id8",
      "buyer_email": "buyer_email0",
      "recipient_name": "recipient_name6",
      "recipient_phone_number": "recipient_phone_number6"
    },
    {
      "errors": [
        {
          "category": "MERCHANT_SUBSCRIPTION_ERROR",
          "code": "INVALID_EXPIRATION",
          "detail": "detail6",
          "field": "field4"
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

