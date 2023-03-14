
# Square Event

## Structure

`SquareEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string \| undefined` | Optional | The ID of the target merchant associated with the event. |
| `locationId` | `string \| undefined` | Optional | The ID of the location associated with the event. |
| `type` | `string \| undefined` | Optional | The type of event this represents. |
| `eventId` | `string \| undefined` | Optional | A unique ID for the event. |
| `createdAt` | `string \| undefined` | Optional | Timestamp of when the event was created, in RFC 3339 format. |
| `data` | [`SquareEventData \| undefined`](../../doc/models/square-event-data.md) | Optional | - |

## Example (as JSON)

```json
{
  "merchant_id": null,
  "location_id": null,
  "type": null,
  "event_id": null,
  "created_at": null,
  "data": null
}
```

