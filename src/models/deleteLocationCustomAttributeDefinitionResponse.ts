import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Represents a response from a delete request containing error messages if there are any. */
export interface DeleteLocationCustomAttributeDefinitionResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteLocationCustomAttributeDefinitionResponseSchema: Schema<DeleteLocationCustomAttributeDefinitionResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
