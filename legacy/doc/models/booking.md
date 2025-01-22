
# Booking

Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
at a given location to a requesting customer in one or more appointment segments.

## Structure

`Booking`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A unique ID of this object representing a booking.<br>**Constraints**: *Maximum Length*: `36` |
| `version` | `number \| undefined` | Optional | The revision number for the booking used for optimistic concurrency. |
| `status` | [`string \| undefined`](../../doc/models/booking-status.md) | Optional | Supported booking statuses. |
| `createdAt` | `string \| undefined` | Optional | The RFC 3339 timestamp specifying the creation time of this booking. |
| `updatedAt` | `string \| undefined` | Optional | The RFC 3339 timestamp specifying the most recent update time of this booking. |
| `startAt` | `string \| null \| undefined` | Optional | The RFC 3339 timestamp specifying the starting time of this booking. |
| `locationId` | `string \| null \| undefined` | Optional | The ID of the [Location](entity:Location) object representing the location where the booked service is provided. Once set when the booking is created, its value cannot be changed.<br>**Constraints**: *Maximum Length*: `32` |
| `customerId` | `string \| null \| undefined` | Optional | The ID of the [Customer](entity:Customer) object representing the customer receiving the booked service.<br>**Constraints**: *Maximum Length*: `192` |
| `customerNote` | `string \| null \| undefined` | Optional | The free-text field for the customer to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a relevant [CatalogObject](entity:CatalogObject) instance.<br>**Constraints**: *Maximum Length*: `4096` |
| `sellerNote` | `string \| null \| undefined` | Optional | The free-text field for the seller to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a specific [CatalogObject](entity:CatalogObject) instance.<br>This field should not be visible to customers.<br>**Constraints**: *Maximum Length*: `4096` |
| `appointmentSegments` | [`AppointmentSegment[] \| null \| undefined`](../../doc/models/appointment-segment.md) | Optional | A list of appointment segments for this booking. |
| `transitionTimeMinutes` | `number \| undefined` | Optional | Additional time at the end of a booking.<br>Applications should not make this field visible to customers of a seller. |
| `allDay` | `boolean \| undefined` | Optional | Whether the booking is of a full business day. |
| `locationType` | [`string \| undefined`](../../doc/models/business-appointment-settings-booking-location-type.md) | Optional | Supported types of location where service is provided. |
| `creatorDetails` | [`BookingCreatorDetails \| undefined`](../../doc/models/booking-creator-details.md) | Optional | Information about a booking creator. |
| `source` | [`string \| undefined`](../../doc/models/booking-booking-source.md) | Optional | Supported sources a booking was created from. |
| `address` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |

## Example (as JSON)

```json
{
  "id": "id4",
  "version": 92,
  "status": "PENDING",
  "created_at": "created_at2",
  "updated_at": "updated_at0"
}
```

