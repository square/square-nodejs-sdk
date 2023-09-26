
# Search Loyalty Events Request

A request to search for loyalty events.

## Structure

`SearchLoyaltyEventsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | [`LoyaltyEventQuery \| undefined`](../../doc/models/loyalty-event-query.md) | Optional | Represents a query used to search for loyalty events. |
| `limit` | `number \| undefined` | Optional | The maximum number of results to include in the response.<br>The last page might contain fewer events.<br>The default is 30 events.<br>**Constraints**: `>= 1`, `<= 30` |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

## Example (as JSON)

```json
{
  "limit": 30,
  "query": {
    "filter": {
      "order_filter": {
        "order_id": "PyATxhYLfsMqpVkcKJITPydgEYfZY"
      },
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
      }
    }
  },
  "cursor": "cursor8"
}
```

