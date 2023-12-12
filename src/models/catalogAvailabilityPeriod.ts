import { nullable, object, optional, Schema, string } from '../schema';

/** Represents a time period of availability. */
export interface CatalogAvailabilityPeriod {
  /**
   * The start time of an availability period, specified in local time using partial-time
   * RFC 3339 format. For example, `8:30:00` for a period starting at 8:30 in the morning.
   * Note that the seconds value is always :00, but it is appended for conformance to the RFC.
   */
  startLocalTime?: string | null;
  /**
   * The end time of an availability period, specified in local time using partial-time
   * RFC 3339 format. For example, `21:00:00` for a period ending at 9:00 in the evening.
   * Note that the seconds value is always :00, but it is appended for conformance to the RFC.
   */
  endLocalTime?: string | null;
  /** Indicates the specific day  of the week. */
  dayOfWeek?: string;
}

export const catalogAvailabilityPeriodSchema: Schema<CatalogAvailabilityPeriod> = object(
  {
    startLocalTime: ['start_local_time', optional(nullable(string()))],
    endLocalTime: ['end_local_time', optional(nullable(string()))],
    dayOfWeek: ['day_of_week', optional(string())],
  }
);
