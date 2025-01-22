
# Retrieve Wage Setting Response

Represents a response from a retrieve request containing the specified `WageSetting` object or error messages.

## Structure

`RetrieveWageSettingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wageSetting` | [`WageSetting \| undefined`](../../doc/models/wage-setting.md) | Optional | Represents information about the overtime exemption status, job assignments, and compensation<br>for a [team member](../../doc/models/team-member.md). |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | The errors that occurred during the request. |

## Example (as JSON)

```json
{
  "wage_setting": {
    "created_at": "2020-06-11T23:01:21+00:00",
    "is_overtime_exempt": false,
    "job_assignments": [
      {
        "annual_rate": {
          "amount": 4500000,
          "currency": "USD"
        },
        "hourly_rate": {
          "amount": 2164,
          "currency": "USD"
        },
        "job_title": "Manager",
        "pay_type": "SALARY",
        "weekly_hours": 40,
        "job_id": "job_id2"
      }
    ],
    "team_member_id": "1yJlHapkseYnNPETIU1B",
    "updated_at": "2020-06-11T23:01:21+00:00",
    "version": 1
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

