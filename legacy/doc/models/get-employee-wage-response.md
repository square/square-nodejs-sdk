
# Get Employee Wage Response

A response to a request to get an `EmployeeWage`. The response contains
the requested `EmployeeWage` objects and might contain a set of `Error` objects if
the request resulted in errors.

## Structure

`GetEmployeeWageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `employeeWage` | [`EmployeeWage \| undefined`](../../doc/models/employee-wage.md) | Optional | The hourly wage rate that an employee earns on a `Shift` for doing the job specified by the `title` property of this object. Deprecated at version 2020-08-26. Use [TeamMemberWage](entity:TeamMemberWage). |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "employee_wage": {
    "employee_id": "33fJchumvVdJwxV0H6L9",
    "hourly_rate": {
      "amount": 2000,
      "currency": "USD"
    },
    "id": "pXS3qCv7BERPnEGedM4S8mhm",
    "title": "Manager"
  },
  "errors": [
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "INVALID_EXPIRATION",
      "detail": "detail6",
      "field": "field4"
    }
  ]
}
```

