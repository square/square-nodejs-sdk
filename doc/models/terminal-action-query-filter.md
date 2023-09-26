
# Terminal Action Query Filter

## Structure

`TerminalActionQueryFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| null \| undefined` | Optional | `TerminalAction`s associated with a specific device. If no device is specified then all<br>`TerminalAction`s for the merchant will be displayed. |
| `createdAt` | [`TimeRange \| undefined`](../../doc/models/time-range.md) | Optional | Represents a generic time range. The start and end values are<br>represented in RFC 3339 format. Time ranges are customized to be<br>inclusive or exclusive based on the needs of a particular endpoint.<br>Refer to the relevant endpoint-specific documentation to determine<br>how time ranges are handled. |
| `status` | `string \| null \| undefined` | Optional | Filter results with the desired status of the `TerminalAction`<br>Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, `COMPLETED` |
| `type` | [`string \| undefined`](../../doc/models/terminal-action-action-type.md) | Optional | Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum. |

## Example (as JSON)

```json
{
  "device_id": "device_id4",
  "created_at": {
    "start_at": "start_at4",
    "end_at": "end_at8"
  },
  "status": "status0",
  "type": "DATA_COLLECTION"
}
```

