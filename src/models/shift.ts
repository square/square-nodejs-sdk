import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Break, breakSchema } from './break';
import { ShiftWage, shiftWageSchema } from './shiftWage';

/**
 * A record of the hourly rate, start, and end times for a single work shift
 * for an employee. May include a record of the start and end times for breaks
 * taken during the shift.
 */
export interface Shift {
  /** UUID for this object */
  id?: string;
  /** The ID of the employee this shift belongs to. DEPRECATED at version 2020-08-26. Use `team_member_id` instead */
  employeeId?: string;
  /**
   * The ID of the location this shift occurred at. Should be based on
   * where the employee clocked in.
   */
  locationId?: string;
  /**
   * Read-only convenience value that is calculated from the location based
   * on `location_id`. Format: the IANA Timezone Database identifier for the
   * location timezone.
   */
  timezone?: string;
  /**
   * RFC 3339; shifted to location timezone + offset. Precision up to the
   * minute is respected; seconds are truncated.
   */
  startAt: string;
  /**
   * RFC 3339; shifted to timezone + offset. Precision up to the minute is
   * respected; seconds are truncated.
   */
  endAt?: string;
  /** The hourly wage rate used to compensate an employee for this shift. */
  wage?: ShiftWage;
  /** A list of any paid or unpaid breaks that were taken during this shift. */
  breaks?: Break[];
  /** Enumerates the possible status of a `Shift` */
  status?: string;
  /**
   * Used for resolving concurrency issues; request will fail if version
   * provided does not match server version at time of request. If not provided,
   * Square executes a blind write; potentially overwriting data from another
   * write.
   */
  version?: number;
  /** A read-only timestamp in RFC 3339 format; presented in UTC. */
  createdAt?: string;
  /** A read-only timestamp in RFC 3339 format; presented in UTC. */
  updatedAt?: string;
  /** The ID of the team member this shift belongs to. Replaced `employee_id` at version "2020-08-26" */
  teamMemberId?: string;
}

export const shiftSchema: Schema<Shift> = object({
  id: ['id', optional(string())],
  employeeId: ['employee_id', optional(string())],
  locationId: ['location_id', optional(string())],
  timezone: ['timezone', optional(string())],
  startAt: ['start_at', string()],
  endAt: ['end_at', optional(string())],
  wage: ['wage', optional(lazy(() => shiftWageSchema))],
  breaks: ['breaks', optional(array(lazy(() => breakSchema)))],
  status: ['status', optional(string())],
  version: ['version', optional(number())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  teamMemberId: ['team_member_id', optional(string())],
});
