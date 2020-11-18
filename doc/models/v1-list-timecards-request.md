
# V1 List Timecards Request

## Structure

`V1ListTimecardsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`string`](/doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `employeeId` | `string` | Optional | If provided, the endpoint returns only timecards for the employee with the specified ID. |
| `beginClockinTime` | `string` | Optional | If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format. |
| `endClockinTime` | `string` | Optional | If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format. |
| `beginClockoutTime` | `string` | Optional | If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format. |
| `endClockoutTime` | `string` | Optional | If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format. |
| `beginUpdatedAt` | `string` | Optional | If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format. |
| `endUpdatedAt` | `string` | Optional | If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format. |
| `deleted` | `boolean` | Optional | If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don't provide this parameter, both valid and deleted timecards are returned. |
| `limit` | `number` | Optional | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. |
| `batchToken` | `string` | Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |

## Example (as JSON)

```json
{
  "order": "DESC",
  "employee_id": "employee_id0",
  "begin_clockin_time": "begin_clockin_time8",
  "end_clockin_time": "end_clockin_time2",
  "begin_clockout_time": "begin_clockout_time0"
}
```

