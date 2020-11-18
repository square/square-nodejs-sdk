
# Search Customers Request

Defines the fields included in the request body for the
SearchCustomers endpoint.

## Structure

`SearchCustomersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string` | Optional | Include the pagination cursor in subsequent calls to this endpoint to retrieve<br>the next set of results associated with the original query.<br><br>See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |
| `limit` | `number` | Optional | A limit on the number of results to be returned in a single page.<br>The limit is advisory - the implementation may return more or fewer results.<br>If the supplied limit is negative, zero, or is higher than the maximum limit<br>of 100, it will be ignored. |
| `query` | [`CustomerQuery`](/doc/models/customer-query.md) | Optional | Represents a query (including filtering criteria, sorting criteria, or both) used to search<br>for customer profiles. |

## Example (as JSON)

```json
{
  "limit": 2,
  "query": {
    "filter": {
      "created_at": {
        "end_at": "2018-02-01T00:00:00-00:00",
        "start_at": "2018-01-01T00:00:00-00:00"
      },
      "creation_source": {
        "rule": "INCLUDE",
        "values": [
          "THIRD_PARTY"
        ]
      },
      "email_address": {
        "fuzzy": "example.com"
      },
      "group_ids": {
        "all": [
          "545AXB44B4XXWMVQ4W8SBT3HHF"
        ]
      }
    },
    "sort": {
      "field": "CREATED_AT",
      "order": "ASC"
    }
  }
}
```

