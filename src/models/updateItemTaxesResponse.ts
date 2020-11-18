import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

export interface UpdateItemTaxesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`. */
  updatedAt?: string;
}

export const updateItemTaxesResponseSchema: Schema<UpdateItemTaxesResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    updatedAt: ['updated_at', optional(string())],
  }
);
