
# Employee

An employee object that is used by the external API.

## Structure

`Employee`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | UUID for this object. |
| `firstName` | `string \| undefined` | Optional | The employee's first name. |
| `lastName` | `string \| undefined` | Optional | The employee's last name. |
| `email` | `string \| undefined` | Optional | The employee's email address |
| `phoneNumber` | `string \| undefined` | Optional | The employee's phone number in E.164 format, i.e. "+12125554250" |
| `locationIds` | `string[] \| undefined` | Optional | A list of location IDs where this employee has access to. |
| `status` | [`string \| undefined`](../../doc/models/employee-status.md) | Optional | The status of the Employee being retrieved. |
| `isOwner` | `boolean \| undefined` | Optional | Whether this employee is the owner of the merchant. Each merchant<br>has one owner employee, and that employee has full authority over<br>the account. |
| `createdAt` | `string \| undefined` | Optional | A read-only timestamp in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | A read-only timestamp in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id0",
  "first_name": "first_name0",
  "last_name": "last_name8",
  "email": "email6",
  "phone_number": "phone_number2",
  "location_ids": [
    "location_ids0"
  ],
  "status": "ACTIVE",
  "is_owner": false,
  "created_at": "created_at2",
  "updated_at": "updated_at4"
}
```

