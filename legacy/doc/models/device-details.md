
# Device Details

Details about the device that took the payment.

## Structure

`DeviceDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| null \| undefined` | Optional | The Square-issued ID of the device.<br>**Constraints**: *Maximum Length*: `255` |
| `deviceInstallationId` | `string \| null \| undefined` | Optional | The Square-issued installation ID for the device.<br>**Constraints**: *Maximum Length*: `255` |
| `deviceName` | `string \| null \| undefined` | Optional | The name of the device set by the seller.<br>**Constraints**: *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "device_id": "device_id0",
  "device_installation_id": "device_installation_id2",
  "device_name": "device_name2"
}
```

