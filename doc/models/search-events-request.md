
# Search Events Request

Searches [Event](../../doc/models/event.md)s for your application.

## Structure

`SearchEventsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of events for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).<br>**Constraints**: *Maximum Length*: `256` |
| `limit` | `number \| undefined` | Optional | The maximum number of events to return in a single page. The response might contain fewer events. The default value is 100, which is also the maximum allowed value.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).<br><br>Default: 100<br>**Constraints**: `>= 1`, `<= 100` |
| `query` | [`SearchEventsQuery \| undefined`](../../doc/models/search-events-query.md) | Optional | Contains query criteria for the search. |

## Example (as JSON)

```json
{
  "cursor": "cursor8",
  "limit": 176,
  "query": {
    "filter": {
      "event_types": [
        "event_types2",
        "event_types3"
      ],
      "merchant_ids": [
        "merchant_ids1",
        "merchant_ids2"
      ],
      "location_ids": [
        "location_ids4"
      ],
      "created_at": {
        "start_at": "start_at4",
        "end_at": "end_at8"
      }
    },
    "sort": {
      "field": "DEFAULT",
      "order": "DESC"
    }
  }
}
```

