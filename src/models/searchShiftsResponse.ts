import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Shift, shiftSchema } from './shift';

/**
 * The response to a request for `Shift` objects. The response contains
 * the requested `Shift` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface SearchShiftsResponse {
  /** Shifts. */
  shifts?: Shift[];
  /** An opaque cursor for fetching the next page. */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const searchShiftsResponseSchema: Schema<SearchShiftsResponse> = object({
  shifts: ['shifts', optional(array(lazy(() => shiftSchema)))],
  cursor: ['cursor', optional(string())],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
