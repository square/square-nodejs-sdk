import { object, optional, Schema, string } from '../schema';

/**
 * A range defined by two dates. Used for filtering a query for Connect v2
 * objects that have date properties.
 */
export interface DateRange {
  /**
   * String in `YYYY-MM-DD` format, e.g. `2017-10-31` per the ISO 8601
   * extended format for calendar dates.
   * The beginning of a date range (inclusive)
   */
  startDate?: string;
  /**
   * String in `YYYY-MM-DD` format, e.g. `2017-10-31` per the ISO 8601
   * extended format for calendar dates.
   * The end of a date range (inclusive)
   */
  endDate?: string;
}

export const dateRangeSchema: Schema<DateRange> = object({
  startDate: ['start_date', optional(string())],
  endDate: ['end_date', optional(string())],
});
