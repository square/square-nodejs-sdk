import { array, lazy, object, optional, Schema, string } from '../schema';
import { BreakType, breakTypeSchema } from './breakType';
import { Error, errorSchema } from './error';

/**
 * The response to a request for a set of `BreakType` objects. The response contains
 * the requested `BreakType` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface ListBreakTypesResponse {
  /** A page of `BreakType` results. */
  breakTypes?: BreakType[];
  /**
   * The value supplied in the subsequent request to fetch the next page
   * of `BreakType` results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const listBreakTypesResponseSchema: Schema<ListBreakTypesResponse> = object(
  {
    breakTypes: ['break_types', optional(array(lazy(() => breakTypeSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
