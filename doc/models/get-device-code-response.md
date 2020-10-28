
# Get Device Code Response

## Structure

`GetDeviceCodeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `device_code` | [`DeviceCode`](/doc/models/device-code.md) | Optional | - |

## Example (as JSON)

```json
{
  "device_code": {
    "id": "B3Z6NAMYQSMTM",
    "name": "Counter 1",
    "code": "EBCARJ",
    "product_type": "TERMINAL_API",
    "location_id": "B5E4484SHHNYH",
    "created_at": "2020-02-06T18:44:33.000Z",
    "pair_by": "2020-02-06T18:49:33.000Z",
    "status": "PAIRED",
    "device_id": "907CS13101300122",
    "status_changed_at": "2020-02-06T18:47:28.000Z"
  }
}
```

