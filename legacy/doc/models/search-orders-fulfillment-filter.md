
# Search Orders Fulfillment Filter

Filter based on [order fulfillment](../../doc/models/fulfillment.md) information.

## Structure

`SearchOrdersFulfillmentFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fulfillmentTypes` | [`string[] \| null \| undefined`](../../doc/models/fulfillment-type.md) | Optional | A list of [fulfillment types](entity:FulfillmentType) to filter<br>for. The list returns orders if any of its fulfillments match any of the fulfillment types<br>listed in this field.<br>See [FulfillmentType](#type-fulfillmenttype) for possible values |
| `fulfillmentStates` | [`string[] \| null \| undefined`](../../doc/models/fulfillment-state.md) | Optional | A list of [fulfillment states](entity:FulfillmentState) to filter<br>for. The list returns orders if any of its fulfillments match any of the<br>fulfillment states listed in this field.<br>See [FulfillmentState](#type-fulfillmentstate) for possible values |

## Example (as JSON)

```json
{
  "fulfillment_types": [
    "PICKUP",
    "SHIPMENT"
  ],
  "fulfillment_states": [
    "PROPOSED"
  ]
}
```

