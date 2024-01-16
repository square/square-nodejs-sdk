
# Search Orders Request

## Structure

`SearchOrdersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationIds` | `string[] \| undefined` | Optional | The location IDs for the orders to query. All locations must belong to<br>the same merchant.<br><br>Max: 10 location IDs. |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for your original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `query` | [`SearchOrdersQuery \| undefined`](../../doc/models/search-orders-query.md) | Optional | Contains query criteria for the search. |
| `limit` | `number \| undefined` | Optional | The maximum number of results to be returned in a single page.<br><br>Default: `500`<br>Max: `1000` |
| `returnEntries` | `boolean \| undefined` | Optional | A Boolean that controls the format of the search results. If `true`,<br>`SearchOrders` returns [OrderEntry](entity:OrderEntry) objects. If `false`, `SearchOrders`<br>returns complete order objects.<br><br>Default: `false`. |

## Example (as JSON)

```json
{
  "limit": 3,
  "location_ids": [
    "057P5VYJ4A5X1",
    "18YC4JDH91E1H"
  ],
  "query": {
    "filter": {
      "date_time_filter": {
        "closed_at": {
          "end_at": "2019-03-04T21:54:45+00:00",
          "start_at": "2018-03-03T20:00:00+00:00"
        },
        "created_at": {
          "start_at": "start_at4",
          "end_at": "end_at8"
        },
        "updated_at": {
          "start_at": "start_at6",
          "end_at": "end_at6"
        }
      },
      "state_filter": {
        "states": [
          "COMPLETED"
        ]
      },
      "fulfillment_filter": {
        "fulfillment_types": [
          "DELIVERY"
        ],
        "fulfillment_states": [
          "CANCELED",
          "FAILED"
        ]
      },
      "source_filter": {
        "source_names": [
          "source_names6"
        ]
      },
      "customer_filter": {
        "customer_ids": [
          "customer_ids3",
          "customer_ids4"
        ]
      }
    },
    "sort": {
      "sort_field": "CLOSED_AT",
      "sort_order": "DESC"
    }
  },
  "return_entries": true,
  "cursor": "cursor4"
}
```

