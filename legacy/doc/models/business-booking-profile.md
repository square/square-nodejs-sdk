
# Business Booking Profile

A seller's business booking profile, including booking policy, appointment settings, etc.

## Structure

`BusinessBookingProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sellerId` | `string \| null \| undefined` | Optional | The ID of the seller, obtainable using the Merchants API.<br>**Constraints**: *Maximum Length*: `32` |
| `createdAt` | `string \| undefined` | Optional | The RFC 3339 timestamp specifying the booking's creation time. |
| `bookingEnabled` | `boolean \| null \| undefined` | Optional | Indicates whether the seller is open for booking. |
| `customerTimezoneChoice` | [`string \| undefined`](../../doc/models/business-booking-profile-customer-timezone-choice.md) | Optional | Choices of customer-facing time zone used for bookings. |
| `bookingPolicy` | [`string \| undefined`](../../doc/models/business-booking-profile-booking-policy.md) | Optional | Policies for accepting bookings. |
| `allowUserCancel` | `boolean \| null \| undefined` | Optional | Indicates whether customers can cancel or reschedule their own bookings (`true`) or not (`false`). |
| `businessAppointmentSettings` | [`BusinessAppointmentSettings \| undefined`](../../doc/models/business-appointment-settings.md) | Optional | The service appointment settings, including where and how the service is provided. |
| `supportSellerLevelWrites` | `boolean \| null \| undefined` | Optional | Indicates whether the seller's subscription to Square Appointments supports creating, updating or canceling an appointment through the API (`true`) or not (`false`) using seller permission. |

## Example (as JSON)

```json
{
  "seller_id": "seller_id8",
  "created_at": "created_at8",
  "booking_enabled": false,
  "customer_timezone_choice": "BUSINESS_LOCATION_TIMEZONE",
  "booking_policy": "ACCEPT_ALL"
}
```

