
# Search Subscriptions Query

Represents a query, consisting of specified query expressions, used to search for subscriptions.

## Structure

`SearchSubscriptionsQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`SearchSubscriptionsFilter \| undefined`](../../doc/models/search-subscriptions-filter.md) | Optional | Represents a set of query expressions (filters) to narrow the scope of targeted subscriptions returned by<br>the [SearchSubscriptions](../../doc/api/subscriptions.md#search-subscriptions) endpoint. |

## Example (as JSON)

```json
{
  "filter": {
    "customer_ids": [
      "customer_ids3",
      "customer_ids2"
    ],
    "location_ids": [
      "location_ids4"
    ],
    "source_names": [
      "source_names2"
    ]
  }
}
```

