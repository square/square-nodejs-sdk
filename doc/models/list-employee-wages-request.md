
# List Employee Wages Request

A request for a set of `EmployeeWage` objects

## Structure

`ListEmployeeWagesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employeeId` | `string` | Optional | Filter wages returned to only those that are associated with the specified employee. |
| `limit` | `number` | Optional | Maximum number of Employee Wages to return per page. Can range between<br>1 and 200. The default is the maximum at 200.<br>**Constraints**: `>= 1`, `<= 200` |
| `cursor` | `string` | Optional | Pointer to the next page of Employee Wage results to fetch. |

## Example (as JSON)

```json
{
  "employee_id": "employee_id0",
  "limit": 172,
  "cursor": "cursor6"
}
```

