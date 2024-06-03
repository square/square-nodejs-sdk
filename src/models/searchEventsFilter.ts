import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { TimeRange, timeRangeSchema } from './timeRange';

/** Criteria to filter events by. */
export interface SearchEventsFilter {
  /** Filter events by event types. */
  eventTypes?: string[] | null;
  /** Filter events by merchant. */
  merchantIds?: string[] | null;
  /** Filter events by location. */
  locationIds?: string[] | null;
  /**
   * Represents a generic time range. The start and end values are
   * represented in RFC 3339 format. Time ranges are customized to be
   * inclusive or exclusive based on the needs of a particular endpoint.
   * Refer to the relevant endpoint-specific documentation to determine
   * how time ranges are handled.
   */
  createdAt?: TimeRange;
}

export const searchEventsFilterSchema: Schema<SearchEventsFilter> = object({
  eventTypes: ['event_types', optional(nullable(array(string())))],
  merchantIds: ['merchant_ids', optional(nullable(array(string())))],
  locationIds: ['location_ids', optional(nullable(array(string())))],
  createdAt: ['created_at', optional(lazy(() => timeRangeSchema))],
});
