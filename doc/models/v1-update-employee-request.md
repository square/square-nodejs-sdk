
# V1 Update Employee Request

## Structure

`V1UpdateEmployeeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1Employee`](/doc/models/v1-employee.md) | Required | Represents one of a business's employees. |

## Example (as JSON)

```json
{
  "body": {
    "id": "id6",
    "first_name": "first_name6",
    "last_name": "last_name4",
    "role_ids": [
      "role_ids0",
      "role_ids1"
    ],
    "authorized_location_ids": [
      "authorized_location_ids7",
      "authorized_location_ids8"
    ],
    "email": "email0",
    "status": "ACTIVE"
  }
}
```

