
# Event

## Structure

`Event`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string \| null \| undefined` | Optional | The ID of the target merchant associated with the event. |
| `locationId` | `string \| null \| undefined` | Optional | The ID of the target location associated with the event. |
| `type` | `string \| null \| undefined` | Optional | The type of event this represents. |
| `eventId` | `string \| null \| undefined` | Optional | A unique ID for the event. |
| `createdAt` | `string \| undefined` | Optional | Timestamp of when the event was created, in RFC 3339 format. |
| `data` | [`EventData \| undefined`](../../doc/models/event-data.md) | Optional | - |

## Example (as JSON)

```json
{
  "merchant_id": "merchant_id2",
  "location_id": "location_id6",
  "type": "type8",
  "event_id": "event_id8",
  "created_at": "created_at0"
}
```

