import { nullable, object, optional, Schema, string } from '../schema';

/** Represents a time period - either a single period or a repeating period. */
export interface CatalogTimePeriod {
  /**
   * An iCalendar (RFC 5545) [event](https://tools.ietf.org/html/rfc5545#section-3.6.1), which
   * specifies the name, timing, duration and recurrence of this time period.
   * Example:
   * ```
   * DTSTART:20190707T180000
   * DURATION:P2H
   * RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR
   * ```
   * Only `SUMMARY`, `DTSTART`, `DURATION` and `RRULE` fields are supported.
   * `DTSTART` must be in local (unzoned) time format. Note that while `BEGIN:VEVENT`
   * and `END:VEVENT` is not required in the request. The response will always
   * include them.
   */
  event?: string | null;
}

export const catalogTimePeriodSchema: Schema<CatalogTimePeriod> = object({
  event: ['event', optional(nullable(string()))],
});
