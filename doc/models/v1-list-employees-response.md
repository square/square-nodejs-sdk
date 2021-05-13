
# V1 List Employees Response

## Structure

`V1ListEmployeesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`V1Employee[] \| undefined`](/doc/models/v1-employee.md) | Optional | - |

## Example (as JSON)

```json
{
  "items": [
    {
      "id": "id7",
      "first_name": "first_name7",
      "last_name": "last_name5",
      "role_ids": [
        "role_ids1",
        "role_ids0",
        "role_ids9"
      ],
      "authorized_location_ids": [
        "authorized_location_ids8"
      ],
      "email": "email9",
      "status": "INACTIVE"
    },
    {
      "id": "id8",
      "first_name": "first_name8",
      "last_name": "last_name6",
      "role_ids": [
        "role_ids2",
        "role_ids1"
      ],
      "authorized_location_ids": [
        "authorized_location_ids9",
        "authorized_location_ids0"
      ],
      "email": "email8",
      "status": "ACTIVE"
    }
  ]
}
```

