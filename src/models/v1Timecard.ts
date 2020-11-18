import { boolean, number, object, optional, Schema, string } from '../schema';

/** Represents a timecard for an employee. */
export interface V1Timecard {
  /** The timecard's unique ID. */
  id?: string;
  /** The ID of the employee the timecard is associated with. */
  employeeId: string;
  /** If true, the timecard was deleted by the merchant, and it is no longer valid. */
  deleted?: boolean;
  /** The clock-in time for the timecard, in ISO 8601 format. */
  clockinTime?: string;
  /** The clock-out time for the timecard, in ISO 8601 format. Provide this value only if importing timecard information from another system. */
  clockoutTime?: string;
  /** The ID of the location the employee clocked in from. We strongly reccomend providing a clockin_location_id. Square uses the clockin_location_id to determine a timecard’s timezone and overtime rules. */
  clockinLocationId?: string;
  /** The ID of the location the employee clocked out from. Provide this value only if importing timecard information from another system. */
  clockoutLocationId?: string;
  /** The time when the timecard was created, in ISO 8601 format. */
  createdAt?: string;
  /** The time when the timecard was most recently updated, in ISO 8601 format. */
  updatedAt?: string;
  /** The total number of regular (non-overtime) seconds worked in the timecard. */
  regularSecondsWorked?: number;
  /** The total number of overtime seconds worked in the timecard. */
  overtimeSecondsWorked?: number;
  /** The total number of doubletime seconds worked in the timecard. */
  doubletimeSecondsWorked?: number;
}

export const v1TimecardSchema: Schema<V1Timecard> = object({
  id: ['id', optional(string())],
  employeeId: ['employee_id', string()],
  deleted: ['deleted', optional(boolean())],
  clockinTime: ['clockin_time', optional(string())],
  clockoutTime: ['clockout_time', optional(string())],
  clockinLocationId: ['clockin_location_id', optional(string())],
  clockoutLocationId: ['clockout_location_id', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  regularSecondsWorked: ['regular_seconds_worked', optional(number())],
  overtimeSecondsWorked: ['overtime_seconds_worked', optional(number())],
  doubletimeSecondsWorked: ['doubletime_seconds_worked', optional(number())],
});
