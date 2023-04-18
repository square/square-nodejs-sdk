import { array, lazy, object, optional, Schema } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';
import { Error, errorSchema } from './error';

export interface BatchRetrieveCatalogObjectsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** A list of [CatalogObject](entity:CatalogObject)s returned. */
  objects?: CatalogObject[];
  /** A list of [CatalogObject](entity:CatalogObject)s referenced by the object in the `objects` field. */
  relatedObjects?: CatalogObject[];
}

export const batchRetrieveCatalogObjectsResponseSchema: Schema<BatchRetrieveCatalogObjectsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    objects: ['objects', optional(array(lazy(() => catalogObjectSchema)))],
    relatedObjects: [
      'related_objects',
      optional(array(lazy(() => catalogObjectSchema))),
    ],
  }
);
