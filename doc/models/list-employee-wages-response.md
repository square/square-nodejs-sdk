
# List Employee Wages Response

The response to a request for a set of `EmployeeWage` objects. The response contains
a set of `EmployeeWage` objects.

## Structure

`ListEmployeeWagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employeeWages` | [`EmployeeWage[] \| undefined`](../../doc/models/employee-wage.md) | Optional | A page of `EmployeeWage` results. |
| `cursor` | `string \| undefined` | Optional | The value supplied in the subsequent request to fetch the next page<br>of `EmployeeWage` results. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "cursor": "2fofTniCgT0yIPAq26kmk0YyFQJZfbWkh73OOnlTHmTAx13NgED",
  "employee_wages": [
    {
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "hourly_rate": {
        "amount": 3250,
        "currency": "USD"
      },
      "id": "pXS3qCv7BERPnEGedM4S8mhm",
      "title": "Manager"
    },
    {
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "hourly_rate": {
        "amount": 2600,
        "currency": "USD"
      },
      "id": "rZduCkzYDUVL3ovh1sQgbue6",
      "title": "Cook"
    },
    {
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "hourly_rate": {
        "amount": 1600,
        "currency": "USD"
      },
      "id": "FxLbs5KpPUHa8wyt5ctjubDX",
      "title": "Barista"
    },
    {
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "hourly_rate": {
        "amount": 1700,
        "currency": "USD"
      },
      "id": "vD1wCgijMDR3cX5TPnu7VXto",
      "title": "Cashier"
    }
  ],
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

