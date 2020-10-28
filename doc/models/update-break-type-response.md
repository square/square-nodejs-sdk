
# Update Break Type Response

A response to a request to update a `BreakType`. Contains
the requested `BreakType` objects. May contain a set of `Error` objects if
the request resulted in errors.

## Structure

`UpdateBreakTypeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `break_type` | [`BreakType`](/doc/models/break-type.md) | Optional | A defined break template that sets an expectation for possible `Break`<br>instances on a `Shift`. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "break_type": {
    "id": "Q6JSJS6D4DBCH",
    "location_id": "26M7H24AZ9N6R",
    "break_name": "Lunch",
    "expected_duration": "PT50M",
    "is_paid": true,
    "version": 2,
    "created_at": "2018-06-12T20:19:12Z",
    "updated_at": "2019-02-26T23:12:59Z"
  }
}
```

