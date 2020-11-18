
# Retrieve Employee Response

## Structure

`RetrieveEmployeeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employee` | [`Employee`](/doc/models/employee.md) | Optional | An employee object that is used by the external API. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "employee": {
    "id": "id8",
    "first_name": "first_name8",
    "last_name": "last_name6",
    "email": "email8",
    "phone_number": "phone_number6"
  },
  "errors": [
    {
      "category": "AUTHENTICATION_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_SHORT",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "INVALID_REQUEST_ERROR",
      "code": "MAP_KEY_LENGTH_TOO_LONG",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "RATE_LIMIT_ERROR",
      "code": "CARD_EXPIRED",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

