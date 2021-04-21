
# Order Fulfillment Pickup Details

Contains details necessary to fulfill a pickup order.

## Structure

`OrderFulfillmentPickupDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipient` | [`OrderFulfillmentRecipient`](/doc/models/order-fulfillment-recipient.md) | Optional | Contains information on the recipient of a fulfillment. |
| `expiresAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when this fulfillment will expire if it is not accepted. Must be in RFC 3339 format<br>e.g., "2016-09-04T23:59:33.123Z". Expiration time can only be set up to 7 days in the future.<br>If `expires_at` is not set, this pickup fulfillment will be automatically accepted when<br>placed. |
| `autoCompleteDuration` | `string` | Optional | The duration of time after which an open and accepted pickup fulfillment<br>will automatically move to the `COMPLETED` state. Must be in RFC3339<br>duration format e.g., "P1W3D".<br><br>If not set, this pickup fulfillment will remain accepted until it is canceled or completed. |
| `scheduleType` | [`string`](/doc/models/order-fulfillment-pickup-details-schedule-type.md) | Optional | The schedule type of the pickup fulfillment. |
| `pickupAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>that represents the start of the pickup window. Must be in RFC3339 timestamp format, e.g.,<br>"2016-09-04T23:59:33.123Z".<br><br>For fulfillments with the schedule type `ASAP`, this is automatically set<br>to the current time plus the expected duration to prepare the fulfillment. |
| `pickupWindowDuration` | `string` | Optional | The window of time in which the order should be picked up after the `pickup_at` timestamp.<br>Must be in RFC3339 duration format, e.g., "P1W3D". Can be used as an<br>informational guideline for merchants. |
| `prepTimeDuration` | `string` | Optional | The duration of time it takes to prepare this fulfillment.<br>Must be in RFC3339 duration format, e.g., "P1W3D". |
| `note` | `string` | Optional | A note meant to provide additional instructions about the pickup<br>fulfillment displayed in the Square Point of Sale and set by the API.<br>**Constraints**: *Maximum Length*: `500` |
| `placedAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the fulfillment was placed. Must be in RFC3339 timestamp format, e.g.,<br>"2016-09-04T23:59:33.123Z". |
| `acceptedAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the fulfillment was accepted. In RFC3339 timestamp format,<br>e.g., "2016-09-04T23:59:33.123Z". |
| `rejectedAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the fulfillment was rejected. In RFC3339 timestamp format, e.g.,<br>"2016-09-04T23:59:33.123Z". |
| `readyAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the fulfillment is marked as ready for pickup. In RFC3339 timestamp format,<br>e.g., "2016-09-04T23:59:33.123Z". |
| `expiredAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating when the fulfillment expired.<br>In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z". |
| `pickedUpAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the fulfillment was picked up by the recipient. In RFC3339 timestamp format,<br>e.g., "2016-09-04T23:59:33.123Z". |
| `canceledAt` | `string` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z", indicating when the<br>fulfillment was canceled. |
| `cancelReason` | `string` | Optional | A description of why the pickup was canceled. Max length: 100 characters.<br>**Constraints**: *Maximum Length*: `100` |
| `isCurbsidePickup` | `boolean` | Optional | If true, indicates this pickup order is for curbside pickup, not in-store pickup. |
| `curbsidePickupDetails` | [`OrderFulfillmentPickupDetailsCurbsidePickupDetails`](/doc/models/order-fulfillment-pickup-details-curbside-pickup-details.md) | Optional | Specific details for curbside pickup. |

## Example (as JSON)

```json
{
  "recipient": {
    "customer_id": "customer_id6",
    "display_name": "display_name8",
    "email_address": "email_address4",
    "phone_number": "phone_number4",
    "address": {
      "address_line_1": "address_line_14",
      "address_line_2": "address_line_24",
      "address_line_3": "address_line_30",
      "locality": "locality4",
      "sublocality": "sublocality4"
    }
  },
  "expires_at": "expires_at6",
  "auto_complete_duration": "auto_complete_duration4",
  "schedule_type": "SCHEDULED",
  "pickup_at": "pickup_at4"
}
```

