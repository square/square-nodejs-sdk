
# Device Attributes

## Structure

`DeviceAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | An enum identifier of the device type.<br>**Default**: `'TERMINAL'` |
| `manufacturer` | `string` | Required | The maker of the device. |
| `model` | `string \| null \| undefined` | Optional | The specific model of the device. |
| `name` | `string \| null \| undefined` | Optional | A seller-specified name for the device. |
| `manufacturersId` | `string \| null \| undefined` | Optional | The manufacturer-supplied identifier for the device (where available). In many cases,<br>this identifier will be a serial number. |
| `updatedAt` | `string \| undefined` | Optional | The RFC 3339-formatted value of the most recent update to the device information.<br>(Could represent any field update on the device.) |
| `version` | `string \| undefined` | Optional | The current version of software installed on the device. |
| `merchantToken` | `string \| null \| undefined` | Optional | The merchant_token identifying the merchant controlling the device. |

## Example (as JSON)

```json
{
  "type": "TERMINAL",
  "manufacturer": "manufacturer0",
  "model": "model4",
  "name": "name6",
  "manufacturers_id": "manufacturers_id2",
  "updated_at": "updated_at2",
  "version": "version2"
}
```

