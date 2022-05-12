
# List Employees Request

## Structure

`ListEmployeesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| undefined` | Optional | - |
| `status` | [`string \| undefined`](../../doc/models/employee-status.md) | Optional | The status of the Employee being retrieved. |
| `limit` | `number \| undefined` | Optional | The number of employees to be returned on each page. |
| `cursor` | `string \| undefined` | Optional | The token required to retrieve the specified page of results. |

## Example (as JSON)

```json
{
  "location_id": null,
  "status": null,
  "limit": null,
  "cursor": null
}
```

