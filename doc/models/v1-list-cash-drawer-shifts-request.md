
# V1 List Cash Drawer Shifts Request

## Structure

`V1ListCashDrawerShiftsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`string`](/doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `begin_time` | `string` | Optional | The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days. |
| `end_time` | `string` | Optional | The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time. |

## Example (as JSON)

```json
{
  "order": "DESC",
  "begin_time": "begin_time2",
  "end_time": "end_time2"
}
```

