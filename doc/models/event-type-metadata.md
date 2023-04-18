
# Event Type Metadata

Contains the metadata of a webhook event type.

## Structure

`EventTypeMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventType` | `string \| undefined` | Optional | The event type. |
| `apiVersionIntroduced` | `string \| undefined` | Optional | The API version at which the event type was introduced. |
| `releaseStatus` | `string \| undefined` | Optional | The release status of the event type. |

## Example (as JSON)

```json
{
  "event_type": "event_type0",
  "api_version_introduced": "api_version_introduced0",
  "release_status": "release_status4"
}
```

