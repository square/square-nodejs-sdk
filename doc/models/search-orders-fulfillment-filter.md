
# Search Orders Fulfillment Filter

Filter based on [order fulfillment](../../doc/models/fulfillment.md) information.

## Structure

`SearchOrdersFulfillmentFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fulfillmentTypes` | [`string[] \| undefined`](../../doc/models/fulfillment-type.md) | Optional | A list of [fulfillment types](../../doc/models/fulfillment-type.md) to filter<br>for. The list returns orders if any of its fulfillments match any of the fulfillment types<br>listed in this field.<br>See [FulfillmentType](#type-fulfillmenttype) for possible values |
| `fulfillmentStates` | [`string[] \| undefined`](../../doc/models/fulfillment-state.md) | Optional | A list of [fulfillment states](../../doc/models/fulfillment-state.md) to filter<br>for. The list returns orders if any of its fulfillments match any of the<br>fulfillment states listed in this field.<br>See [FulfillmentState](#type-fulfillmentstate) for possible values |

## Example (as JSON)

```json
{
  "fulfillment_types": null,
  "fulfillment_states": null
}
```

