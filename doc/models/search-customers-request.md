
# Search Customers Request

Defines the fields that are included in the request body of a request to the
`SearchCustomers` endpoint.

## Structure

`SearchCustomersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string` | Optional | Include the pagination cursor in subsequent calls to this endpoint to retrieve<br>the next set of results associated with the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `limit` | `bigint` | Optional | A limit on the number of results to be returned in a single page.<br>The limit is advisory. The implementation might return more or fewer results.<br>If the supplied limit is negative, zero, or higher than the maximum limit<br>of 100, it is ignored.<br>**Constraints**: `>= 1`, `<= 100` |
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

