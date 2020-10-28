
# Create Refund Response

Defines the fields that are included in the response body of
a request to the [CreateRefund](#endpoint-createrefund) endpoint.

One of `errors` or `refund` is present in a given response (never both).

## Structure

`CreateRefundResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `refund` | [`Refund`](/doc/models/refund.md) | Optional | Represents a refund processed for a Square transaction. |

## Example (as JSON)

```json
{
  "refund": {
    "id": "b27436d1-7f8e-5610-45c6-417ef71434b4-SW",
    "location_id": "18YC4JDH91E1H",
    "transaction_id": "KnL67ZIwXCPtzOrqj0HrkxMF",
    "tender_id": "MtZRYYdDrYNQbOvV7nbuBvMF",
    "created_at": "2016-02-12T00:28:18Z",
    "reason": "some reason",
    "amount_money": {
      "amount": 100,
      "currency": "USD"
    },
    "additional_recipients": [
      {
        "location_id": "057P5VYJ4A5X1",
        "description": "Application fees",
        "amount_money": {
          "amount": 10,
          "currency": "USD"
        },
        "receivable_id": "ISu5xwxJ5v0CMJTQq7RvqyMF"
      }
    ],
    "status": "PENDING"
  }
}
```

