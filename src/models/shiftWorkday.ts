import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { DateRange, dateRangeSchema } from './dateRange';

/**
 * A `Shift` search query filter parameter that sets a range of days that
 * a `Shift` must start or end in before passing the filter condition.
 */
export interface ShiftWorkday {
  /**
   * A range defined by two dates. Used for filtering a query for Connect v2
   * objects that have date properties.
   */
  dateRange?: DateRange;
  /** Defines the logic used to apply a workday filter. */
  matchShiftsBy?: string;
  /**
   * Location-specific timezones convert workdays to datetime filters.
   * Every location included in the query must have a timezone or this field
   * must be provided as a fallback. Format: the IANA timezone database
   * identifier for the relevant timezone.
   */
  defaultTimezone?: string | null;
}

export const shiftWorkdaySchema: Schema<ShiftWorkday> = object({
  dateRange: ['date_range', optional(lazy(() => dateRangeSchema))],
  matchShiftsBy: ['match_shifts_by', optional(string())],
  defaultTimezone: ['default_timezone', optional(nullable(string()))],
});
