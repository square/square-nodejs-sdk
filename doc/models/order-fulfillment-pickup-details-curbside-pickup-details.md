
# Order Fulfillment Pickup Details Curbside Pickup Details

Specific details for curbside pickup.

## Structure

`OrderFulfillmentPickupDetailsCurbsidePickupDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `curbsideDetails` | `string` | Optional | Specific details for curbside pickup, such as parking number, vehicle model, etc.<br>**Constraints**: *Maximum Length*: `250` |
| `buyerArrivedAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z", indicating when the buyer<br>arrived and is waiting for pickup. |

## Example (as JSON)

```json
{
  "curbside_details": "curbside_details6",
  "buyer_arrived_at": "buyer_arrived_at2"
}
```

