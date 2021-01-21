
# List Cash Drawer Shift Events Request

## Structure

`ListCashDrawerShiftEventsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string` |  | The ID of the location to list cash drawer shifts for.<br>**Constraints**: *Minimum Length*: `1` |
| `limit` | `number` | Optional | Number of resources to be returned in a page of results (200 by<br>default, 1000 max).<br>**Constraints**: `<= 1000` |
| `cursor` | `string` | Optional | Opaque cursor for fetching the next page of results. |

## Example (as JSON)

```json
{
  "location_id": "location_id4",
  "limit": 172,
  "cursor": "cursor6"
}
```

