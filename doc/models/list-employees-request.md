
# List Employees Request

## Structure

`ListEmployeesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| null \| undefined` | Optional | - |
| `status` | [`string \| undefined`](../../doc/models/employee-status.md) | Optional | The status of the Employee being retrieved.<br><br>DEPRECATED at version 2020-08-26. Replaced by [TeamMemberStatus](entity:TeamMemberStatus). |
| `limit` | `number \| null \| undefined` | Optional | The number of employees to be returned on each page. |
| `cursor` | `string \| null \| undefined` | Optional | The token required to retrieve the specified page of results. |

## Example (as JSON)

```json
{
  "location_id": "location_id4",
  "status": "ACTIVE",
  "limit": 18,
  "cursor": "cursor6"
}
```

