
# List Break Types Response

The response to a request for a set of `BreakTypes`. Contains
the requested `BreakType` objects. May contain a set of `Error` objects if
the request resulted in errors.

## Structure

`ListBreakTypesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `breakTypes` | [`BreakType[]`](/doc/models/break-type.md) | Optional | A page of `BreakType` results. |
| `cursor` | `string` | Optional | Value supplied in the subsequent request to fetch the next next page<br>of Break Type results. |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |

## Example (as JSON)

```json
{
  "break_types": [
    {
      "break_name": "Coffee Break",
      "created_at": "2019-01-22T20:47:37Z",
      "expected_duration": "PT5M",
      "id": "REGS1EQR1TPZ5",
      "is_paid": false,
      "location_id": "PAA1RJZZKXBFG",
      "updated_at": "2019-01-22T20:47:37Z",
      "version": 1
    },
    {
      "break_name": "Lunch Break",
      "created_at": "2019-01-25T19:26:30Z",
      "expected_duration": "PT1H",
      "id": "92EPDRQKJ5088",
      "is_paid": true,
      "location_id": "PAA1RJZZKXBFG",
      "updated_at": "2019-01-25T19:26:30Z",
      "version": 3
    }
  ],
  "cursor": "2fofTniCgT0yIPAq26kmk0YyFQJZfbWkh73OOnlTHmTAx13NgED"
}
```

