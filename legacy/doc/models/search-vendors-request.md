
# Search Vendors Request

Represents an input into a call to [SearchVendors](../../doc/api/vendors.md#search-vendors).

## Structure

`SearchVendorsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`SearchVendorsRequestFilter \| undefined`](../../doc/models/search-vendors-request-filter.md) | Optional | Defines supported query expressions to search for vendors by. |
| `sort` | [`SearchVendorsRequestSort \| undefined`](../../doc/models/search-vendors-request-sort.md) | Optional | Defines a sorter used to sort results from [SearchVendors](../../doc/api/vendors.md#search-vendors). |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |

## Example (as JSON)

```json
{
  "query": {
    "filter": {
      "name": [
        "Joe's Fresh Seafood",
        "Hannah's Bakery"
      ],
      "status": [
        "ACTIVE"
      ]
    },
    "sort": {
      "field": "CREATED_AT",
      "order": "ASC"
    }
  },
  "filter": {
    "name": [
      "name4",
      "name5",
      "name6"
    ],
    "status": [
      "ACTIVE",
      "INACTIVE"
    ]
  },
  "sort": {
    "field": "NAME",
    "order": "DESC"
  },
  "cursor": "cursor0"
}
```

