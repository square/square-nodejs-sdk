
# List Employees Response

## Structure

`ListEmployeesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employees` | [`Employee[] \| undefined`](../../doc/models/employee.md) | Optional | - |
| `cursor` | `string \| undefined` | Optional | The token to be used to retrieve the next page of results. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "employees": null,
  "cursor": null,
  "errors": null
}
```

