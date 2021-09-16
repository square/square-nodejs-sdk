import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * The response to a request to delete a `Shift`. The response might contain a set of
 * `Error` objects if the request resulted in errors.
 */
export interface DeleteShiftResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteShiftResponseSchema: Schema<DeleteShiftResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
