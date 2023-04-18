
# Search Orders Query

Contains query criteria for the search.

## Structure

`SearchOrdersQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`SearchOrdersFilter \| undefined`](../../doc/models/search-orders-filter.md) | Optional | Filtering criteria to use for a `SearchOrders` request. Multiple filters<br>are ANDed together. |
| `sort` | [`SearchOrdersSort \| undefined`](../../doc/models/search-orders-sort.md) | Optional | Sorting criteria for a `SearchOrders` request. Results can only be sorted<br>by a timestamp field. |

## Example (as JSON)

```json
{
  "filter": {
    "state_filter": {
      "states": [
        "CANCELED",
        "COMPLETED"
      ]
    },
    "date_time_filter": {
      "created_at": {
        "start_at": "start_at6",
        "end_at": "end_at6"
      },
      "updated_at": {
        "start_at": "start_at0",
        "end_at": "end_at2"
      },
      "closed_at": {}
    },
    "fulfillment_filter": {
      "fulfillment_types": [
        "SHIPMENT",
        "DELIVERY",
        "PICKUP"
      ],
      "fulfillment_states": [
        "PREPARED",
        "COMPLETED",
        "CANCELED"
      ]
    },
    "source_filter": {
      "source_names": [
        "source_names0"
      ]
    },
    "customer_filter": {
      "customer_ids": [
        "customer_ids7",
        "customer_ids8"
      ]
    }
  },
  "sort": {
    "sort_field": "UPDATED_AT",
    "sort_order": "DESC"
  }
}
```

