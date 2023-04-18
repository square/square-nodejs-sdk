
# Business Booking Profile

## Structure

`BusinessBookingProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sellerId` | `string \| undefined` | Optional | The ID of the seller, obtainable using the Merchants API.<br>**Constraints**: *Maximum Length*: `32` |
| `createdAt` | `string \| undefined` | Optional | The RFC 3339 timestamp specifying the booking's creation time. |
| `bookingEnabled` | `boolean \| undefined` | Optional | Indicates whether the seller is open for booking. |
| `customerTimezoneChoice` | [`string \| undefined`](../../doc/models/business-booking-profile-customer-timezone-choice.md) | Optional | Choices of customer-facing time zone used for bookings. |
| `bookingPolicy` | [`string \| undefined`](../../doc/models/business-booking-profile-booking-policy.md) | Optional | Policies for accepting bookings. |
| `allowUserCancel` | `boolean \| undefined` | Optional | Indicates whether customers can cancel or reschedule their own bookings (`true`) or not (`false`). |
| `businessAppointmentSettings` | [`BusinessAppointmentSettings \| undefined`](../../doc/models/business-appointment-settings.md) | Optional | The service appointment settings, including where and how the service is provided. |
| `supportSellerLevelWrites` | `boolean \| undefined` | Optional | Indicates whether the seller's subscription to Square Appointments supports creating, updating or canceling an appointment through the API (`true`) or not (`false`) using seller permission. |

## Example (as JSON)

```json
{
  "seller_id": "seller_id8",
  "created_at": "created_at2",
  "booking_enabled": false,
  "customer_timezone_choice": "BUSINESS_LOCATION_TIMEZONE",
  "booking_policy": "ACCEPT_ALL",
  "allow_user_cancel": false,
  "business_appointment_settings": {
    "location_types": [
      "CUSTOMER_LOCATION",
      "PHONE",
      "BUSINESS_LOCATION"
    ],
    "alignment_time": "SERVICE_DURATION",
    "min_booking_lead_time_seconds": 68,
    "max_booking_lead_time_seconds": 78,
    "any_team_member_booking_enabled": false,
    "multiple_service_booking_enabled": false,
    "max_appointments_per_day_limit_type": "PER_TEAM_MEMBER",
    "max_appointments_per_day_limit": 108,
    "cancellation_window_seconds": 102,
    "cancellation_fee_money": {
      "amount": 102,
      "currency": "QAR"
    },
    "cancellation_policy": "CANCELLATION_TREATED_AS_NO_SHOW",
    "cancellation_policy_text": "cancellation_policy_text2",
    "skip_booking_flow_staff_selection": false
  },
  "support_seller_level_writes": false
}
```

