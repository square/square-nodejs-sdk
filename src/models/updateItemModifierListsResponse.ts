import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

export interface UpdateItemModifierListsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The database [timestamp](https://developer.squareup.com/docs/build-basics/common-data-types/working-with-dates) of this update in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`. */
  updatedAt?: string;
}

export const updateItemModifierListsResponseSchema: Schema<UpdateItemModifierListsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    updatedAt: ['updated_at', optional(string())],
  }
);
