import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';

/** The service appointment settings, including where and how the service is provided. */
export interface BusinessAppointmentSettings {
  /**
   * Types of the location allowed for bookings.
   * See [BookingLocationType](#type-bookinglocationtype) for possible values
   */
  locationTypes?: string[];
  /** Time units of a service duration for bookings. */
  alignmentTime?: string;
  /** The minimum lead time in seconds before a service can be booked. Bookings must be created at least this far ahead of the booking's starting time. */
  minBookingLeadTimeSeconds?: number;
  /** The maximum lead time in seconds before a service can be booked. Bookings must be created at most this far ahead of the booking's starting time. */
  maxBookingLeadTimeSeconds?: number;
  /**
   * Indicates whether a customer can choose from all available time slots and have a staff member assigned
   * automatically (`true`) or not (`false`).
   */
  anyTeamMemberBookingEnabled?: boolean;
  /** Indicates whether a customer can book multiple services in a single online booking. */
  multipleServiceBookingEnabled?: boolean;
  /** Types of daily appointment limits. */
  maxAppointmentsPerDayLimitType?: string;
  /** The maximum number of daily appointments per team member or per location. */
  maxAppointmentsPerDayLimit?: number;
  /** The cut-off time in seconds for allowing clients to cancel or reschedule an appointment. */
  cancellationWindowSeconds?: number;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  cancellationFeeMoney?: Money;
  /** The category of the seller’s cancellation policy. */
  cancellationPolicy?: string;
  /** The free-form text of the seller's cancellation policy. */
  cancellationPolicyText?: string;
  /** Indicates whether customers has an assigned staff member (`true`) or can select s staff member of their choice (`false`). */
  skipBookingFlowStaffSelection?: boolean;
}

export const businessAppointmentSettingsSchema: Schema<BusinessAppointmentSettings> = object(
  {
    locationTypes: ['location_types', optional(array(string()))],
    alignmentTime: ['alignment_time', optional(string())],
    minBookingLeadTimeSeconds: [
      'min_booking_lead_time_seconds',
      optional(number()),
    ],
    maxBookingLeadTimeSeconds: [
      'max_booking_lead_time_seconds',
      optional(number()),
    ],
    anyTeamMemberBookingEnabled: [
      'any_team_member_booking_enabled',
      optional(boolean()),
    ],
    multipleServiceBookingEnabled: [
      'multiple_service_booking_enabled',
      optional(boolean()),
    ],
    maxAppointmentsPerDayLimitType: [
      'max_appointments_per_day_limit_type',
      optional(string()),
    ],
    maxAppointmentsPerDayLimit: [
      'max_appointments_per_day_limit',
      optional(number()),
    ],
    cancellationWindowSeconds: [
      'cancellation_window_seconds',
      optional(number()),
    ],
    cancellationFeeMoney: [
      'cancellation_fee_money',
      optional(lazy(() => moneySchema)),
    ],
    cancellationPolicy: ['cancellation_policy', optional(string())],
    cancellationPolicyText: ['cancellation_policy_text', optional(string())],
    skipBookingFlowStaffSelection: [
      'skip_booking_flow_staff_selection',
      optional(boolean()),
    ],
  }
);
