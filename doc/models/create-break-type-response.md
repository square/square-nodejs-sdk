
# Create Break Type Response

The response to the request to create a `BreakType`. Contains
the created `BreakType` object. May contain a set of `Error` objects if
the request resulted in errors.

## Structure

`CreateBreakTypeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `break_type` | [`BreakType`](/doc/models/break-type.md) | Optional | A defined break template that sets an expectation for possible `Break`<br>instances on a `Shift`. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "break_type": {
    "id": "49SSVDJG76WF3",
    "location_id": "CGJN03P1D08GF",
    "break_name": "Lunch Break",
    "expected_duration": "PT30M",
    "is_paid": true,
    "version": 1,
    "created_at": "2019-02-26T22:42:54Z",
    "updated_at": "2019-02-26T22:42:54Z"
  }
}
```

