
# List Customer Groups Request

Defines the query parameters that can be included in a request to the
[ListCustomerGroups](/doc/api/customer-groups.md#list-customer-groups) endpoint.

## Structure

`ListCustomerGroupsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cursor` | `string \| undefined` | Optional | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| `limit` | `number \| undefined` | Optional | The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.<br>The limit is ignored if it is less than 1 or greater than 50. The default value is 50.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).<br>**Constraints**: `>= 1`, `<= 50` |

## Example (as JSON)

```json
{}
```

