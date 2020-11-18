import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

export interface DeleteCatalogObjectResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The IDs of all catalog objects deleted by this request.
   * Multiple IDs may be returned when associated objects are also deleted, for example
   * a catalog item variation will be deleted (and its ID included in this field)
   * when its parent catalog item is deleted.
   */
  deletedObjectIds?: string[];
  /**
   * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * of this deletion in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`.
   */
  deletedAt?: string;
}

export const deleteCatalogObjectResponseSchema: Schema<DeleteCatalogObjectResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    deletedObjectIds: ['deleted_object_ids', optional(array(string()))],
    deletedAt: ['deleted_at', optional(string())],
  }
);
