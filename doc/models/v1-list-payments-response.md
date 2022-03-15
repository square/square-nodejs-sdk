
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
      "id": "id7",
      "merchant_id": "merchant_id7",
      "created_at": "created_at5",
      "creator_id": "creator_id7",
      "device": {
        "id": "id3",
        "name": "name3"
      }
    },
    {
      "id": "id8",
      "merchant_id": "merchant_id8",
      "created_at": "created_at6",
      "creator_id": "creator_id8",
      "device": {
        "id": "id4",
        "name": "name4"
      }
    }
  ]
}
```

