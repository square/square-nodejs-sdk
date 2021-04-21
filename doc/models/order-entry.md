
# Order Entry

A lightweight description of an [Order](/doc/models/order.md) that is returned when
`returned_entries` is true on a [SearchOrdersRequest](/doc/api/orders.md#search-orders)

## Structure

`OrderEntry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string` | Optional | The id of the Order |
| `version` | `number` | Optional | Version number which is incremented each time an update is committed to the order.<br>Orders that were not created through the API will not include a version and<br>thus cannot be updated.<br><br>[Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders). |
| `locationId` | `string` | Optional | The location id the Order belongs to. |

## Example (as JSON)

```json
{
  "order_id": "order_id6",
  "version": 172,
  "location_id": "location_id4"
}
```

