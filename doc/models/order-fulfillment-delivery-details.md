
# Order Fulfillment Delivery Details

Describes delivery details of an order fulfillment.

## Structure

`OrderFulfillmentDeliveryDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipient` | [`OrderFulfillmentRecipient \| undefined`](../../doc/models/order-fulfillment-recipient.md) | Optional | Information about the fulfillment recipient. |
| `scheduleType` | [`string \| undefined`](../../doc/models/order-fulfillment-delivery-details-schedule-type.md) | Optional | The schedule type of the delivery fulfillment. |
| `placedAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the fulfillment was placed.<br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").<br>Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z". |
| `deliverAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>that represents the start of the delivery period.<br>When the fulfillment `schedule_type` is `ASAP`, the field is automatically<br>set to the current time plus the `prep_time_duration`.<br>Otherwise, the application can set this field while the fulfillment `state` is<br>`PROPOSED`, `RESERVED`, or `PREPARED` (any time before the<br>terminal state such as `COMPLETED`, `CANCELED`, and `FAILED`).<br><br>The timestamp must be in RFC 3339 format<br>(for example, "2016-09-04T23:59:33.123Z"). |
| `prepTimeDuration` | `string \| undefined` | Optional | The duration of time it takes to prepare and deliver this fulfillment.<br>The timestamp must be in RFC 3339 format (for example, "P1W3D"). |
| `deliveryWindowDuration` | `string \| undefined` | Optional | The time period after the `deliver_at` timestamp in which to deliver the order.<br>Applications can set this field when the fulfillment `state` is<br>`PROPOSED`, `RESERVED`, or `PREPARED` (any time before the terminal state<br>such as `COMPLETED`, `CANCELED`, and `FAILED`).<br>The timestamp must be in RFC 3339 format (for example, "P1W3D"). |
| `note` | `string \| undefined` | Optional | Provides additional instructions about the delivery fulfillment.<br>It is displayed in the Square Point of Sale application and set by the API.<br>**Constraints**: *Maximum Length*: `550` |
| `completedAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicates when the seller completed the fulfillment.<br>This field is automatically set when  fulfillment `state` changes to `COMPLETED`.<br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `inProgressAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicates when the seller started processing the fulfillment.<br>This field is automatically set when the fulfillment `state` changes to `RESERVED`.<br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `rejectedAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the fulfillment was rejected. This field is<br>automatically set when the fulfillment `state` changes to `FAILED`.<br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `readyAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the seller marked the fulfillment as ready for<br>courier pickup. This field is automatically set when the fulfillment `state` changes<br>to PREPARED.<br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `deliveredAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the fulfillment was delivered to the recipient.<br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `canceledAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when the fulfillment was canceled. This field is automatically<br>set when the fulfillment `state` changes to `CANCELED`.<br><br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `cancelReason` | `string \| undefined` | Optional | The delivery cancellation reason. Max length: 100 characters.<br>**Constraints**: *Maximum Length*: `100` |
| `courierPickupAt` | `string \| undefined` | Optional | The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)<br>indicating when an order can be picked up by the courier for delivery.<br>The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z"). |
| `courierPickupWindowDuration` | `string \| undefined` | Optional | The period of time in which the order should be picked up by the courier after the<br>`courier_pickup_at` timestamp.<br>The time must be in RFC 3339 format (for example, "P1W3D"). |
| `isNoContactDelivery` | `boolean \| undefined` | Optional | Whether the delivery is preferred to be no contact. |
| `dropoffNotes` | `string \| undefined` | Optional | A note to provide additional instructions about how to deliver the order.<br>**Constraints**: *Maximum Length*: `550` |
| `courierProviderName` | `string \| undefined` | Optional | The name of the courier provider.<br>**Constraints**: *Maximum Length*: `255` |
| `courierSupportPhoneNumber` | `string \| undefined` | Optional | The support phone number of the courier.<br>**Constraints**: *Maximum Length*: `17` |
| `squareDeliveryId` | `string \| undefined` | Optional | The identifier for the delivery created by Square.<br>**Constraints**: *Maximum Length*: `50` |
| `externalDeliveryId` | `string \| undefined` | Optional | The identifier for the delivery created by the third-party courier service.<br>**Constraints**: *Maximum Length*: `50` |
| `managedDelivery` | `boolean \| undefined` | Optional | The flag to indicate the delivery is managed by a third party (ie DoorDash), which means<br>we may not receive all recipient information for PII purposes. |

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
      "sublocality": "sublocality4",
      "sublocality_2": "sublocality_22",
      "sublocality_3": "sublocality_34",
      "administrative_district_level_1": "administrative_district_level_18",
      "administrative_district_level_2": "administrative_district_level_20",
      "administrative_district_level_3": "administrative_district_level_32",
      "postal_code": "postal_code6",
      "country": "PK",
      "first_name": "first_name4",
      "last_name": "last_name2"
    }
  },
  "schedule_type": "SCHEDULED",
  "placed_at": "placed_at0",
  "deliver_at": "deliver_at8",
  "prep_time_duration": "prep_time_duration2",
  "delivery_window_duration": "delivery_window_duration4",
  "note": "note4",
  "completed_at": "completed_at2",
  "in_progress_at": "in_progress_at4",
  "rejected_at": "rejected_at8",
  "ready_at": "ready_at0",
  "delivered_at": "delivered_at8",
  "canceled_at": "canceled_at4",
  "cancel_reason": "cancel_reason4",
  "courier_pickup_at": "courier_pickup_at8",
  "courier_pickup_window_duration": "courier_pickup_window_duration6",
  "is_no_contact_delivery": false,
  "dropoff_notes": "dropoff_notes6",
  "courier_provider_name": "courier_provider_name2",
  "courier_support_phone_number": "courier_support_phone_number4",
  "square_delivery_id": "square_delivery_id0",
  "external_delivery_id": "external_delivery_id6",
  "managed_delivery": false
}
```

