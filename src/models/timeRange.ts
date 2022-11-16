import { nullable, object, optional, Schema, string } from '../schema';

/**
 * Represents a generic time range. The start and end values are
 * represented in RFC 3339 format. Time ranges are customized to be
 * inclusive or exclusive based on the needs of a particular endpoint.
 * Refer to the relevant endpoint-specific documentation to determine
 * how time ranges are handled.
 */
export interface TimeRange {
  /**
   * A datetime value in RFC 3339 format indicating when the time range
   * starts.
   */
  startAt?: string | null;
  /**
   * A datetime value in RFC 3339 format indicating when the time range
   * ends.
   */
  endAt?: string | null;
}

export const timeRangeSchema: Schema<TimeRange> = object({
  startAt: ['start_at', optional(nullable(string()))],
  endAt: ['end_at', optional(nullable(string()))],
});
