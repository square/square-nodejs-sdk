import { lazy, object, optional, Schema, string } from '../schema';
import { TimeRange, timeRangeSchema } from './timeRange';

export interface TerminalCheckoutQueryFilter {
  /**
   * The `TerminalCheckout` objects associated with a specific device. If no device is specified, then all
   * `TerminalCheckout` objects for the merchant are displayed.
   */
  deviceId?: string;
  /**
   * Represents a generic time range. The start and end values are
   * represented in RFC 3339 format. Time ranges are customized to be
   * inclusive or exclusive based on the needs of a particular endpoint.
   * Refer to the relevant endpoint-specific documentation to determine
   * how time ranges are handled.
   */
  createdAt?: TimeRange;
  /**
   * Filtered results with the desired status of the `TerminalCheckout`.
   * Options: PENDING, IN_PROGRESS, CANCELED, COMPLETED
   */
  status?: string;
}

export const terminalCheckoutQueryFilterSchema: Schema<TerminalCheckoutQueryFilter> = object(
  {
    deviceId: ['device_id', optional(string())],
    createdAt: ['created_at', optional(lazy(() => timeRangeSchema))],
    status: ['status', optional(string())],
  }
);
