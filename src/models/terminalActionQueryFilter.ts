import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { TimeRange, timeRangeSchema } from './timeRange';

export interface TerminalActionQueryFilter {
  /**
   * `TerminalAction`s associated with a specific device. If no device is specified then all
   * `TerminalAction`s for the merchant will be displayed.
   */
  deviceId?: string | null;
  /**
   * Represents a generic time range. The start and end values are
   * represented in RFC 3339 format. Time ranges are customized to be
   * inclusive or exclusive based on the needs of a particular endpoint.
   * Refer to the relevant endpoint-specific documentation to determine
   * how time ranges are handled.
   */
  createdAt?: TimeRange;
  /**
   * Filter results with the desired status of the `TerminalAction`
   * Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, `COMPLETED`
   */
  status?: string | null;
  /** Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum. */
  type?: string;
}

export const terminalActionQueryFilterSchema: Schema<TerminalActionQueryFilter> = object(
  {
    deviceId: ['device_id', optional(nullable(string()))],
    createdAt: ['created_at', optional(lazy(() => timeRangeSchema))],
    status: ['status', optional(nullable(string()))],
    type: ['type', optional(string())],
  }
);
