
# List Employee Wages Response

The response to a request for a set of `EmployeeWage` objects. Contains
a set of `EmployeeWage`.

## Structure

`ListEmployeeWagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employee_wages` | [`EmployeeWage[]`](/doc/models/employee-wage.md) | Optional | A page of Employee Wage results. |
| `cursor` | `string` | Optional | Value supplied in the subsequent request to fetch the next next page<br>of Employee Wage results. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "employee_wages": [
    {
      "id": "pXS3qCv7BERPnEGedM4S8mhm",
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "title": "Manager",
      "hourly_rate": {
        "amount": 3250,
        "currency": "USD"
      }
    },
    {
      "id": "rZduCkzYDUVL3ovh1sQgbue6",
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "title": "Cook",
      "hourly_rate": {
        "amount": 2600,
        "currency": "USD"
      }
    },
    {
      "id": "FxLbs5KpPUHa8wyt5ctjubDX",
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "title": "Barista",
      "hourly_rate": {
        "amount": 1600,
        "currency": "USD"
      }
    },
    {
      "id": "vD1wCgijMDR3cX5TPnu7VXto",
      "employee_id": "33fJchumvVdJwxV0H6L9",
      "title": "Cashier",
      "hourly_rate": {
        "amount": 1700,
        "currency": "USD"
      }
    }
  ],
  "cursor": "2fofTniCgT0yIPAq26kmk0YyFQJZfbWkh73OOnlTHmTAx13NgED"
}
```

