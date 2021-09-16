import { array, lazy, object, optional, Schema } from '../schema';
import { BreakType, breakTypeSchema } from './breakType';
import { Error, errorSchema } from './error';

/**
 * The response to a request to get a `BreakType`. The response contains
 * the requested `BreakType` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface GetBreakTypeResponse {
  /**
   * A defined break template that sets an expectation for possible `Break`
   * instances on a `Shift`.
   */
  breakType?: BreakType;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const getBreakTypeResponseSchema: Schema<GetBreakTypeResponse> = object({
  breakType: ['break_type', optional(lazy(() => breakTypeSchema))],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
