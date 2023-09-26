
# Loyalty Event Query

Represents a query used to search for loyalty events.

## Structure

`LoyaltyEventQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`LoyaltyEventFilter \| undefined`](../../doc/models/loyalty-event-filter.md) | Optional | The filtering criteria. If the request specifies multiple filters,<br>the endpoint uses a logical AND to evaluate them. |

## Example (as JSON)

```json
{
  "filter": {
    "loyalty_account_filter": {
      "loyalty_account_id": "loyalty_account_id8"
    },
    "type_filter": {
      "types": [
        "ACCUMULATE_PROMOTION_POINTS",
        "ACCUMULATE_POINTS",
        "CREATE_REWARD"
      ]
    },
    "date_time_filter": {
      "created_at": {
        "start_at": "start_at4",
        "end_at": "end_at8"
      }
    },
    "location_filter": {
      "location_ids": [
        "location_ids0",
        "location_ids1",
        "location_ids2"
      ]
    },
    "order_filter": {
      "order_id": "order_id2"
    }
  }
}
```

