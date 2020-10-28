
# List Device Codes Response

## Structure

`ListDeviceCodesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[]`](/doc/models/error.md) | Optional | Any errors that occurred during the request. |
| `device_codes` | [`DeviceCode[]`](/doc/models/device-code.md) | Optional | The queried DeviceCode. |
| `cursor` | `string` | Optional | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. This value is present only if the request<br>succeeded and additional results are available.<br><br>See [Paginating results](#paginatingresults) for more information. |

## Example (as JSON)

```json
{
  "device_codes": [
    {
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
    },
    {
      "id": "YKGMJMYK8H4PQ",
      "name": "Unused device code",
      "code": "GVXNYN",
      "product_type": "TERMINAL_API",
      "location_id": "A6SYFRSV4WAFW",
      "pair_by": "2020-02-07T20:00:04.000Z",
      "created_at": "2020-02-07T19:55:04.000Z",
      "status": "UNPAIRED",
      "status_changed_at": "2020-02-07T19:55:04.000Z"
    }
  ]
}
```

