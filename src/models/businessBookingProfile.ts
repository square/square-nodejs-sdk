import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  BusinessAppointmentSettings,
  businessAppointmentSettingsSchema,
} from './businessAppointmentSettings';

export interface BusinessBookingProfile {
  /** The ID of the seller, obtainable using the Merchants API. */
  sellerId?: string;
  /** The RFC-3339 timestamp specifying the booking's creation time. */
  createdAt?: string;
  /** Indicates whether the seller is open for booking. */
  bookingEnabled?: boolean;
  /** Choices of customer-facing time zone used for bookings. */
  customerTimezoneChoice?: string;
  /** Policies for accepting bookings. */
  bookingPolicy?: string;
  /** Indicates whether customers can cancel or reschedule their own bookings (`true`) or not (`false`). */
  allowUserCancel?: boolean;
  /** The service appointment settings, including where and how the service is provided. */
  businessAppointmentSettings?: BusinessAppointmentSettings;
}

export const businessBookingProfileSchema: Schema<BusinessBookingProfile> = object(
  {
    sellerId: ['seller_id', optional(string())],
    createdAt: ['created_at', optional(string())],
    bookingEnabled: ['booking_enabled', optional(boolean())],
    customerTimezoneChoice: ['customer_timezone_choice', optional(string())],
    bookingPolicy: ['booking_policy', optional(string())],
    allowUserCancel: ['allow_user_cancel', optional(boolean())],
    businessAppointmentSettings: [
      'business_appointment_settings',
      optional(lazy(() => businessAppointmentSettingsSchema)),
    ],
  }
);
