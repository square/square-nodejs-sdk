import { array, lazy, object, optional, Schema, string } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';
import { Error, errorSchema } from './error';

export interface ListCatalogResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
   */
  cursor?: string;
  /** The CatalogObjects returned. */
  objects?: CatalogObject[];
}

export const listCatalogResponseSchema: Schema<ListCatalogResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  cursor: ['cursor', optional(string())],
  objects: ['objects', optional(array(lazy(() => catalogObjectSchema)))],
});
