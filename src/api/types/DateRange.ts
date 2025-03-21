/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A range defined by two dates. Used for filtering a query for Connect v2
 * objects that have date properties.
 */
export interface DateRange {
    /**
     * A string in `YYYY-MM-DD` format, such as `2017-10-31`, per the ISO 8601
     * extended format for calendar dates.
     * The beginning of a date range (inclusive).
     */
    startDate?: string | null;
    /**
     * A string in `YYYY-MM-DD` format, such as `2017-10-31`, per the ISO 8601
     * extended format for calendar dates.
     * The end of a date range (inclusive).
     */
    endDate?: string | null;
}
