import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * The response to a request to delete a `BreakType`. The response might contain a set
 * of `Error` objects if the request resulted in errors.
 */
export interface DeleteBreakTypeResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteBreakTypeResponseSchema: Schema<DeleteBreakTypeResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
