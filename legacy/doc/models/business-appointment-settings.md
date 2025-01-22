
# Business Appointment Settings

The service appointment settings, including where and how the service is provided.

## Structure

`BusinessAppointmentSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationTypes` | [`string[] \| null \| undefined`](../../doc/models/business-appointment-settings-booking-location-type.md) | Optional | Types of the location allowed for bookings.<br>See [BusinessAppointmentSettingsBookingLocationType](#type-businessappointmentsettingsbookinglocationtype) for possible values |
| `alignmentTime` | [`string \| undefined`](../../doc/models/business-appointment-settings-alignment-time.md) | Optional | Time units of a service duration for bookings. |
| `minBookingLeadTimeSeconds` | `number \| null \| undefined` | Optional | The minimum lead time in seconds before a service can be booked. A booking must be created at least this amount of time before its starting time. |
| `maxBookingLeadTimeSeconds` | `number \| null \| undefined` | Optional | The maximum lead time in seconds before a service can be booked. A booking must be created at most this amount of time before its starting time. |
| `anyTeamMemberBookingEnabled` | `boolean \| null \| undefined` | Optional | Indicates whether a customer can choose from all available time slots and have a staff member assigned<br>automatically (`true`) or not (`false`). |
| `multipleServiceBookingEnabled` | `boolean \| null \| undefined` | Optional | Indicates whether a customer can book multiple services in a single online booking. |
| `maxAppointmentsPerDayLimitType` | [`string \| undefined`](../../doc/models/business-appointment-settings-max-appointments-per-day-limit-type.md) | Optional | Types of daily appointment limits. |
| `maxAppointmentsPerDayLimit` | `number \| null \| undefined` | Optional | The maximum number of daily appointments per team member or per location. |
| `cancellationWindowSeconds` | `number \| null \| undefined` | Optional | The cut-off time in seconds for allowing clients to cancel or reschedule an appointment. |
| `cancellationFeeMoney` | [`Money \| undefined`](../../doc/models/money.md) | Optional | Represents an amount of money. `Money` fields can be signed or unsigned.<br>Fields that do not explicitly define whether they are signed or unsigned are<br>considered unsigned and can only hold positive amounts. For signed fields, the<br>sign of the value indicates the purpose of the money transfer. See<br>[Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)<br>for more information. |
| `cancellationPolicy` | [`string \| undefined`](../../doc/models/business-appointment-settings-cancellation-policy.md) | Optional | The category of the seller’s cancellation policy. |
| `cancellationPolicyText` | `string \| null \| undefined` | Optional | The free-form text of the seller's cancellation policy.<br>**Constraints**: *Maximum Length*: `65536` |
| `skipBookingFlowStaffSelection` | `boolean \| null \| undefined` | Optional | Indicates whether customers has an assigned staff member (`true`) or can select s staff member of their choice (`false`). |

## Example (as JSON)

```json
{
  "location_types": [
    "PHONE"
  ],
  "alignment_time": "SERVICE_DURATION",
  "min_booking_lead_time_seconds": 88,
  "max_booking_lead_time_seconds": 98,
  "any_team_member_booking_enabled": false
}
```

