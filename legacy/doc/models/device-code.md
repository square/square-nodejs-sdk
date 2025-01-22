
# Device Code

## Structure

`DeviceCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique id for this device code. |
| `name` | `string \| null \| undefined` | Optional | An optional user-defined name for the device code.<br>**Constraints**: *Maximum Length*: `128` |
| `code` | `string \| undefined` | Optional | The unique code that can be used to login. |
| `deviceId` | `string \| undefined` | Optional | The unique id of the device that used this code. Populated when the device is paired up. |
| `productType` | `string` | Required, Constant | **Default**: `'TERMINAL_API'` |
| `locationId` | `string \| null \| undefined` | Optional | The location assigned to this code.<br>**Constraints**: *Maximum Length*: `50` |
| `status` | [`string \| undefined`](../../doc/models/device-code-status.md) | Optional | DeviceCode.Status enum. |
| `pairBy` | `string \| undefined` | Optional | When this DeviceCode will expire and no longer login. Timestamp in RFC 3339 format. |
| `createdAt` | `string \| undefined` | Optional | When this DeviceCode was created. Timestamp in RFC 3339 format. |
| `statusChangedAt` | `string \| undefined` | Optional | When this DeviceCode's status was last changed. Timestamp in RFC 3339 format. |
| `pairedAt` | `string \| undefined` | Optional | When this DeviceCode was paired. Timestamp in RFC 3339 format. |

## Example (as JSON)

```json
{
  "product_type": "TERMINAL_API",
  "id": "id4",
  "name": "name4",
  "code": "code2",
  "device_id": "device_id0",
  "location_id": "location_id8"
}
```

