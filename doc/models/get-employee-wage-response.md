
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
      "category": "REFUND_ERROR",
      "code": "MERCHANT_SUBSCRIPTION_NOT_FOUND",
      "detail": "detail1",
      "field": "field9"
    },
    {
      "category": "MERCHANT_SUBSCRIPTION_ERROR",
      "code": "BAD_REQUEST",
      "detail": "detail2",
      "field": "field0"
    },
    {
      "category": "EXTERNAL_VENDOR_ERROR",
      "code": "MISSING_REQUIRED_PARAMETER",
      "detail": "detail3",
      "field": "field1"
    }
  ]
}
```

