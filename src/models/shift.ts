import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Break, breakSchema } from './break';
import { Money, moneySchema } from './money';
import { ShiftWage, shiftWageSchema } from './shiftWage';

/**
 * A record of the hourly rate, start, and end times for a single work shift
 * for an employee. This might include a record of the start and end times for breaks
 * taken during the shift.
 */
export interface Shift {
  /** The UUID for this object. */
  id?: string;
  /** The ID of the employee this shift belongs to. DEPRECATED at version 2020-08-26. Use `team_member_id` instead. */
  employeeId?: string | null;
  /**
   * The ID of the location this shift occurred at. The location should be based on
   * where the employee clocked in.
   */
  locationId: string;
  /**
   * The read-only convenience value that is calculated from the location based
   * on the `location_id`. Format: the IANA timezone database identifier for the
   * location timezone.
   */
  timezone?: string | null;
  /**
   * RFC 3339; shifted to the location timezone + offset. Precision up to the
   * minute is respected; seconds are truncated.
   */
  startAt: string;
  /**
   * RFC 3339; shifted to the timezone + offset. Precision up to the minute is
   * respected; seconds are truncated.
   */
  endAt?: string | null;
  /** The hourly wage rate used to compensate an employee for this shift. */
  wage?: ShiftWage;
  /** A list of all the paid or unpaid breaks that were taken during this shift. */
  breaks?: Break[] | null;
  /** Enumerates the possible status of a `Shift`. */
  status?: string;
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
  /** The ID of the team member this shift belongs to. Replaced `employee_id` at version "2020-08-26". */
  teamMemberId?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  declaredCashTipMoney?: Money;
}

export const shiftSchema: Schema<Shift> = object({
  id: ['id', optional(string())],
  employeeId: ['employee_id', optional(nullable(string()))],
  locationId: ['location_id', string()],
  timezone: ['timezone', optional(nullable(string()))],
  startAt: ['start_at', string()],
  endAt: ['end_at', optional(nullable(string()))],
  wage: ['wage', optional(lazy(() => shiftWageSchema))],
  breaks: ['breaks', optional(nullable(array(lazy(() => breakSchema))))],
  status: ['status', optional(string())],
  version: ['version', optional(number())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  teamMemberId: ['team_member_id', optional(nullable(string()))],
  declaredCashTipMoney: [
    'declared_cash_tip_money',
    optional(lazy(() => moneySchema)),
  ],
});
