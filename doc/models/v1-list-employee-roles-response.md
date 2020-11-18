
# V1 List Employee Roles Response

## Structure

`V1ListEmployeeRolesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1EmployeeRole[]`](/doc/models/v1-employee-role.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "id": "id7",
      "name": "name7",
      "permissions": [
        "REGISTER_EDIT_ITEM",
        "REGISTER_ISSUE_REFUNDS"
      ],
      "is_owner": true,
      "created_at": "created_at5",
      "updated_at": "updated_at7"
    },
    {
      "id": "id8",
      "name": "name8",
      "permissions": [
        "REGISTER_ISSUE_REFUNDS",
        "REGISTER_OPEN_CASH_DRAWER_OUTSIDE_SALE",
        "REGISTER_VIEW_SUMMARY_REPORTS"
      ],
      "is_owner": false,
      "created_at": "created_at6",
      "updated_at": "updated_at6"
    }
  ]
}
```

