
# Device Component Details Application Details

## Structure

`DeviceComponentDetailsApplicationDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationType` | [`string \| undefined`](../../doc/models/application-type.md) | Optional | - |
| `version` | `string \| undefined` | Optional | The version of the application. |
| `sessionLocation` | `string \| null \| undefined` | Optional | The location_id of the session for the application. |
| `deviceCodeId` | `string \| null \| undefined` | Optional | The id of the device code that was used to log in to the device. |

## Example (as JSON)

```json
{
  "application_type": "TERMINAL_API",
  "version": "version4",
  "session_location": "session_location0",
  "device_code_id": "device_code_id2"
}
```

