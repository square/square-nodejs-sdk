import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Shift, shiftSchema } from './shift';

/**
 * A response to a request to get a `Shift`. The response contains
 * the requested `Shift` object and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface GetShiftResponse {
  /**
   * A record of the hourly rate, start, and end times for a single work shift
   * for an employee. This might include a record of the start and end times for breaks
   * taken during the shift.
   */
  shift?: Shift;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const getShiftResponseSchema: Schema<GetShiftResponse> = object({
  shift: ['shift', optional(lazy(() => shiftSchema))],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
