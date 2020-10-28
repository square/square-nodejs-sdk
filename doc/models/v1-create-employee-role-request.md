
# V1 Create Employee Role Request

## Structure

`V1CreateEmployeeRoleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employee_role` | [`V1EmployeeRole`](/doc/models/v1-employee-role.md) | Optional | V1EmployeeRole |

## Example (as JSON)

```json
{
  "employee_role": {
    "id": "id2",
    "name": "name2",
    "permissions": [
      "REGISTER_CHANGE_SETTINGS"
    ],
    "is_owner": false,
    "created_at": "created_at0",
    "updated_at": "updated_at8"
  }
}
```

