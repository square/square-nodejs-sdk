
# Create Break Type Response

The response to the request to create a `BreakType`. The response contains
the created `BreakType` object and might contain a set of `Error` objects if
the request resulted in errors.

## Structure

`CreateBreakTypeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `breakType` | [`BreakType \| undefined`](../../doc/models/break-type.md) | Optional | A defined break template that sets an expectation for possible `Break`<br>instances on a `Shift`. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "break_type": {
    "break_name": "Lunch Break",
    "created_at": "2019-02-26T22:42:54Z",
    "expected_duration": "PT30M",
    "id": "49SSVDJG76WF3",
    "is_paid": true,
    "location_id": "CGJN03P1D08GF",
    "updated_at": "2019-02-26T22:42:54Z",
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

