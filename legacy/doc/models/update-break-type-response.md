
# Update Break Type Response

A response to a request to update a `BreakType`. The response contains
the requested `BreakType` objects and might contain a set of `Error` objects if
the request resulted in errors.

## Structure

`UpdateBreakTypeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `breakType` | [`BreakType \| undefined`](../../doc/models/break-type.md) | Optional | A defined break template that sets an expectation for possible `Break`<br>instances on a `Shift`. |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "break_type": {
    "break_name": "Lunch",
    "created_at": "2018-06-12T20:19:12Z",
    "expected_duration": "PT50M",
    "id": "Q6JSJS6D4DBCH",
    "is_paid": true,
    "location_id": "26M7H24AZ9N6R",
    "updated_at": "2019-02-26T23:12:59Z",
    "version": 2
  },
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

