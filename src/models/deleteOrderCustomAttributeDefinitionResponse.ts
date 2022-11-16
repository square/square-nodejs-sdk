import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Represents a response from deleting an order custom attribute definition. */
export interface DeleteOrderCustomAttributeDefinitionResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const deleteOrderCustomAttributeDefinitionResponseSchema: Schema<DeleteOrderCustomAttributeDefinitionResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
