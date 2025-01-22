
# Search Customers Request

Defines the fields that are included in the request body of a request to the
`SearchCustomers` endpoint.

## Structure

`SearchCustomersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | Include the pagination cursor in subsequent calls to this endpoint to retrieve<br>the next set of results associated with the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| `limit` | `bigint \| undefined` | Optional | The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.<br>If the specified limit is invalid, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 100.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).<br>**Constraints**: `>= 1`, `<= 100` |
| `query` | [`CustomerQuery \| undefined`](../../doc/models/customer-query.md) | Optional | Represents filtering and sorting criteria for a [SearchCustomers](../../doc/api/customers.md#search-customers) request. |
| `count` | `boolean \| undefined` | Optional | Indicates whether to return the total count of matching customers in the `count` field of the response.<br><br>The default value is `false`. |

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
        "fuzzy": "example.com",
        "exact": "exact2"
      },
      "group_ids": {
        "all": [
          "545AXB44B4XXWMVQ4W8SBT3HHF"
        ]
      },
      "updated_at": {
        "start_at": "start_at6",
        "end_at": "end_at6"
      },
      "phone_number": {
        "exact": "exact2",
        "fuzzy": "fuzzy8"
      }
    },
    "sort": {
      "field": "CREATED_AT",
      "order": "ASC"
    }
  },
  "cursor": "cursor0",
  "count": false
}
```

