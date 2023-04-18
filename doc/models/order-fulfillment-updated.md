
# Order Fulfillment Updated

## Structure

`OrderFulfillmentUpdated`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string \| undefined` | Optional | The order's unique ID. |
| `version` | `number \| undefined` | Optional | The version number, which is incremented each time an update is committed to the order.<br>Orders that were not created through the API do not include a version number and<br>therefore cannot be updated.<br><br>[Read more about working with versions.](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders) |
| `locationId` | `string \| undefined` | Optional | The ID of the seller location that this order is associated with. |
| `state` | [`string \| undefined`](../../doc/models/order-state.md) | Optional | The state of the order. |
| `createdAt` | `string \| undefined` | Optional | The timestamp for when the order was created, in RFC 3339 format. |
| `updatedAt` | `string \| undefined` | Optional | The timestamp for when the order was last updated, in RFC 3339 format. |
| `fulfillmentUpdate` | [`OrderFulfillmentUpdatedUpdate[] \| undefined`](../../doc/models/order-fulfillment-updated-update.md) | Optional | The fulfillments that were updated with this version change. |

## Example (as JSON)

```json
{
  "order_id": "order_id6",
  "version": 172,
  "location_id": "location_id4",
  "state": "OPEN",
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "fulfillment_update": [
    {
      "fulfillment_uid": "fulfillment_uid6",
      "old_state": "CANCELED",
      "new_state": "PREPARED"
    },
    {
      "fulfillment_uid": "fulfillment_uid7",
      "old_state": "FAILED",
      "new_state": "COMPLETED"
    },
    {
      "fulfillment_uid": "fulfillment_uid8",
      "old_state": "PROPOSED",
      "new_state": "CANCELED"
    }
  ]
}
```

