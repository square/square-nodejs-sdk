
# Get Break Type Response

The response to a request to get a `BreakType`. Contains
the requested `BreakType` objects. May contain a set of `Error` objects if
the request resulted in errors.

## Structure

`GetBreakTypeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `break_type` | [`BreakType`](/doc/models/break-type.md) | Optional | A defined break template that sets an expectation for possible `Break`<br>instances on a `Shift`. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "break_type": {
    "id": "lA0mj_RSOprNPwMUXdYp",
    "location_id": "059SB0E0WCNWS",
    "break_name": "Lunch Break",
    "expected_duration": "PT30M",
    "is_paid": true,
    "version": 1,
    "created_at": "2019-02-21T17:50:00Z",
    "updated_at": "2019-02-21T17:50:00Z"
  }
}
```

