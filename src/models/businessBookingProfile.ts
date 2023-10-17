import {
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  BusinessAppointmentSettings,
  businessAppointmentSettingsSchema,
} from './businessAppointmentSettings';

/** A seller's business booking profile, including booking policy, appointment settings, etc. */
export interface BusinessBookingProfile {
  /** The ID of the seller, obtainable using the Merchants API. */
  sellerId?: string | null;
  /** The RFC 3339 timestamp specifying the booking's creation time. */
  createdAt?: string;
  /** Indicates whether the seller is open for booking. */
  bookingEnabled?: boolean | null;
  /** Choices of customer-facing time zone used for bookings. */
  customerTimezoneChoice?: string;
  /** Policies for accepting bookings. */
  bookingPolicy?: string;
  /** Indicates whether customers can cancel or reschedule their own bookings (`true`) or not (`false`). */
  allowUserCancel?: boolean | null;
  /** The service appointment settings, including where and how the service is provided. */
  businessAppointmentSettings?: BusinessAppointmentSettings;
  /** Indicates whether the seller's subscription to Square Appointments supports creating, updating or canceling an appointment through the API (`true`) or not (`false`) using seller permission. */
  supportSellerLevelWrites?: boolean | null;
}

export const businessBookingProfileSchema: Schema<BusinessBookingProfile> = object(
  {
    sellerId: ['seller_id', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    bookingEnabled: ['booking_enabled', optional(nullable(boolean()))],
    customerTimezoneChoice: ['customer_timezone_choice', optional(string())],
    bookingPolicy: ['booking_policy', optional(string())],
    allowUserCancel: ['allow_user_cancel', optional(nullable(boolean()))],
    businessAppointmentSettings: [
      'business_appointment_settings',
      optional(lazy(() => businessAppointmentSettingsSchema)),
    ],
    supportSellerLevelWrites: [
      'support_seller_level_writes',
      optional(nullable(boolean())),
    ],
  }
);
