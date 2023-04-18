
# Search Orders Request

The request does not have any required fields. When given no query criteria,
`SearchOrders` returns all results for all of the seller's locations. When retrieving additional
pages using a `cursor`, the `query` must be equal to the `query` used to retrieve the first page of
results.

## Structure

`SearchOrdersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationIds` | `string[] \| undefined` | Optional | The location IDs for the orders to query. All locations must belong to<br>the same merchant.<br><br>Min: 1 location ID.<br><br>Max: 10 location IDs. |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for your original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `query` | [`SearchOrdersQuery \| undefined`](../../doc/models/search-orders-query.md) | Optional | Contains query criteria for the search. |
| `limit` | `number \| undefined` | Optional | The maximum number of results to be returned in a single page. It is<br>possible to receive fewer results than the specified limit on a given page.<br><br>Default: `500`<br>**Constraints**: `>= 1` |
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
        }
      },
      "state_filter": {
        "states": [
          "COMPLETED"
        ]
      }
    },
    "sort": {
      "sort_field": "CLOSED_AT",
      "sort_order": "DESC"
    }
  },
  "return_entries": true
}
```

