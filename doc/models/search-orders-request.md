
# Search Orders Request

The request does not have any required fields. When given no query criteria,
SearchOrders will return all results for all of the merchant’s locations. When fetching additional
pages using a `cursor`, the `query` must be equal to the `query` used to fetch the first page of
results.

## Structure

`SearchOrdersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationIds` | `string[]` | Optional | The location IDs for the orders to query. All locations must belong to<br>the same merchant.<br><br>Min: 1 location IDs.<br><br>Max: 10 location IDs. |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br>See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. |
| `query` | [`SearchOrdersQuery`](/doc/models/search-orders-query.md) | Optional | Contains query criteria for the search. |
| `limit` | `number` | Optional | Maximum number of results to be returned in a single page. It is<br>possible to receive fewer results than the specified limit on a given page.<br><br>Default: `500`<br>**Constraints**: `>= 1` |
| `returnEntries` | `boolean` | Optional | Boolean that controls the format of the search results. If `true`,<br>SearchOrders will return [`OrderEntry`](#type-orderentry) objects. If `false`, SearchOrders<br>will return complete Order objects.<br><br>Default: `false`. |

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

