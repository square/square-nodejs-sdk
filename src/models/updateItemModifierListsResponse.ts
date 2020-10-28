import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

export interface UpdateItemModifierListsResponse {
  /** Information on any errors encountered. */
  errors?: Error[];
  updatedAt?: string;
}

export const updateItemModifierListsResponseSchema: Schema<UpdateItemModifierListsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    updatedAt: ['updated_at', optional(string())],
  }
);
