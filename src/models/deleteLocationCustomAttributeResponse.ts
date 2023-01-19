import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Represents a [DeleteLocationCustomAttribute]($e/LocationCustomAttributes/DeleteLocationCustomAttribute) response.
 * Either an empty object `{}` (for a successful deletion) or `errors` is present in the response.
 */
export interface DeleteLocationCustomAttributeResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteLocationCustomAttributeResponseSchema: Schema<DeleteLocationCustomAttributeResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
