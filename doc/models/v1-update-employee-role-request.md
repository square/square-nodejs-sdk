
# V1 Update Employee Role Request

## Structure

`V1UpdateEmployeeRoleRequest`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `body` | [`V1EmployeeRole`](/doc/models/v1-employee-role.md) | V1EmployeeRole |

## Example (as JSON)

```json
{
  "body": {
    "id": "id6",
    "name": "name6",
    "permissions": [
      "REGISTER_APPLY_RESTRICTED_DISCOUNTS",
      "REGISTER_CHANGE_SETTINGS",
      "REGISTER_EDIT_ITEM"
    ],
    "is_owner": false,
    "created_at": "created_at4",
    "updated_at": "updated_at8"
  }
}
```

