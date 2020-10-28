
# List Customers Request

Defines the query parameters that can be provided in a request to the
ListCustomers endpoint.

## Structure

`ListCustomersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |
| `sort_field` | [`string`](/doc/models/customer-sort-field.md) | Optional | Specifies customer attributes as the sort key to customer profiles returned from a search. |
| `sort_order` | [`string`](/doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |

## Example (as JSON)

```json
{
  "cursor": "cursor6",
  "sort_field": "DEFAULT",
  "sort_order": "DESC"
}
```

