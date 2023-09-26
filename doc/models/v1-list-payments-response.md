
# V1 List Payments Response

## Structure

`V1ListPaymentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1Payment[] \| undefined`](../../doc/models/v1-payment.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "id": "id8",
      "merchant_id": "merchant_id8",
      "created_at": "created_at6",
      "creator_id": "creator_id8",
      "device": {
        "id": "id6",
        "name": "name6"
      }
    },
    {
      "id": "id8",
      "merchant_id": "merchant_id8",
      "created_at": "created_at6",
      "creator_id": "creator_id8",
      "device": {
        "id": "id6",
        "name": "name6"
      }
    }
  ]
}
```

