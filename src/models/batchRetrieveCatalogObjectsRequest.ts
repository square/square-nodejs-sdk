import {
  array,
  bigint,
  boolean,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface BatchRetrieveCatalogObjectsRequest {
  /** The IDs of the CatalogObjects to be retrieved. */
  objectIds: string[];
  /**
   * If `true`, the response will include additional objects that are related to the
   * requested objects, as follows:
   * If the `objects` field of the response contains a CatalogItem, its associated
   * CatalogCategory objects, CatalogTax objects, CatalogImage objects and
   * CatalogModifierLists will be returned in the `related_objects` field of the
   * response. If the `objects` field of the response contains a CatalogItemVariation,
   * its parent CatalogItem will be returned in the `related_objects` field of
   * the response.
   */
  includeRelatedObjects?: boolean;
  /**
   * The specific version of the catalog objects to be included in the response.
   * This allows you to retrieve historical versions of objects. The specified version value is matched against
   * the [CatalogObject](#type-catalogobject)s' `version` attribute.
   */
  catalogVersion?: bigint;
}

export const batchRetrieveCatalogObjectsRequestSchema: Schema<BatchRetrieveCatalogObjectsRequest> = object(
  {
    objectIds: ['object_ids', array(string())],
    includeRelatedObjects: ['include_related_objects', optional(boolean())],
    catalogVersion: ['catalog_version', optional(bigint())],
  }
);
