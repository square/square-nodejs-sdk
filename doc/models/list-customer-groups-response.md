
# List Customer Groups Response

Defines the fields that are included in the response body of
a request to the [ListCustomerGroups](#endpoint-listcustomergroups) endpoint.

One of `errors` or `groups` is present in a given response (never both).

## Structure

`ListCustomerGroupsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `groups` | [`CustomerGroup[]`](/doc/models/customer-group.md) | Optional | A list of customer groups belonging to the current merchant. |
| `cursor` | `string` | Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. This value is present only if the request<br>succeeded and additional results are available.<br><br>See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |

## Example (as JSON)

```json
{
  "groups": [
    {
      "created_at": "2020-04-13T21:54:57.863Z",
      "id": "2TAT3CMH4Q0A9M87XJZED0WMR3",
      "name": "Loyal Customers",
      "updated_at": "2020-04-13T21:54:58Z"
    },
    {
      "created_at": "2020-04-13T21:55:18.795Z",
      "id": "4XMEHESXJBNE9S9JAKZD2FGB14",
      "name": "Super Loyal Customers",
      "updated_at": "2020-04-13T21:55:19Z"
    }
  ]
}
```

