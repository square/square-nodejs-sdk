import { boolean, object, optional, Schema } from '../schema';

export interface RetrieveCatalogObjectRequest {
  /**
   * If `true`, the response will include additional objects that are related to the
   * requested object, as follows:
   * If the `object` field of the response contains a `CatalogItem`, its associated
   * `CatalogCategory`, `CatalogTax`, `CatalogImage` and `CatalogModifierList` objects will
   * be returned in the `related_objects` field of the response. If the `object` field of
   * the response contains a `CatalogItemVariation`, its parent `CatalogItem` will be returned
   * in the `related_objects` field of the response.
   * Default value: `false`
   */
  includeRelatedObjects?: boolean;
}

export const retrieveCatalogObjectRequestSchema: Schema<RetrieveCatalogObjectRequest> = object(
  { includeRelatedObjects: ['include_related_objects', optional(boolean())] }
);
