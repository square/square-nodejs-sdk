import { number, object, optional, Schema, string } from '../schema';

/**
 * Sets the day of the week and hour of the day that a business starts a
 * workweek. This is used to calculate overtime pay.
 */
export interface WorkweekConfig {
  /** The UUID for this object. */
  id?: string;
  /** The days of the week. */
  startOfWeek: string;
  /**
   * The local time at which a business week starts. Represented as a
   * string in `HH:MM` format (`HH:MM:SS` is also accepted, but seconds are
   * truncated).
   */
  startOfDayLocalTime: string;
  /**
   * Used for resolving concurrency issues. The request fails if the version
   * provided does not match the server version at the time of the request. If not provided,
   * Square executes a blind write; potentially overwriting data from another
   * write.
   */
  version?: number;
  /** A read-only timestamp in RFC 3339 format; presented in UTC. */
  createdAt?: string;
  /** A read-only timestamp in RFC 3339 format; presented in UTC. */
  updatedAt?: string;
}

export const workweekConfigSchema: Schema<WorkweekConfig> = object({
  id: ['id', optional(string())],
  startOfWeek: ['start_of_week', string()],
  startOfDayLocalTime: ['start_of_day_local_time', string()],
  version: ['version', optional(number())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
