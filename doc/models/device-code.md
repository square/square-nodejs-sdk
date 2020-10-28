
# Device Code

## Structure

`DeviceCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The unique id for this device code. |
| `name` | `string` | Optional | An optional user-defined name for the device code. |
| `code` | `string` | Optional | The unique code that can be used to login. |
| `device_id` | `string` | Optional | The unique id of the device that used this code. Populated when the device is paired up. |
| `product_type` | `string` |  | *Default: `'TERMINAL_API'`* |
| `location_id` | `string` | Optional | The location assigned to this code. |
| `status` | [`string`](/doc/models/device-code-status.md) | Optional | DeviceCode.Status enum. |
| `pair_by` | `string` | Optional | When this DeviceCode will expire and no longer login. Timestamp in RFC 3339 format. |
| `created_at` | `string` | Optional | When this DeviceCode was created. Timestamp in RFC 3339 format. |
| `status_changed_at` | `string` | Optional | When this DeviceCode's status was last changed. Timestamp in RFC 3339 format. |
| `paired_at` | `string` | Optional | When this DeviceCode was paired. Timestamp in RFC 3339 format. |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "code": "code8",
  "device_id": "device_id6",
  "product_type": "product_type4",
  "location_id": "location_id4"
}
```

