import { array, lazy, object, optional, Schema, string } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';
import { Error, errorSchema } from './error';

export interface SearchCatalogObjectsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
   */
  cursor?: string;
  /** The CatalogObjects returned. */
  objects?: CatalogObject[];
  /** A list of CatalogObjects referenced by the objects in the `objects` field. */
  relatedObjects?: CatalogObject[];
  /**
   * When the associated product catalog was last updated. Will
   * match the value for `end_time` or `cursor` if either field is included in the `SearchCatalog` request.
   */
  latestTime?: string;
}

export const searchCatalogObjectsResponseSchema: Schema<SearchCatalogObjectsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cursor: ['cursor', optional(string())],
    objects: ['objects', optional(array(lazy(() => catalogObjectSchema)))],
    relatedObjects: [
      'related_objects',
      optional(array(lazy(() => catalogObjectSchema))),
    ],
    latestTime: ['latest_time', optional(string())],
  }
);
