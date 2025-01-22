
# Event Metadata

Contains metadata about a particular [Event](../../doc/models/event.md).

## Structure

`EventMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventId` | `string \| null \| undefined` | Optional | A unique ID for the event. |
| `apiVersion` | `string \| null \| undefined` | Optional | The API version of the event. This corresponds to the default API version of the developer application at the time when the event was created. |

## Example (as JSON)

```json
{
  "event_id": "event_id0",
  "api_version": "api_version6"
}
```

