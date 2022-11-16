import { nullable, object, optional, Schema, string } from '../schema';

/**
 * A mapping between a temporary client-supplied ID and a permanent server-generated ID.
 * When calling [UpsertCatalogObject]($e/Catalog/UpsertCatalogObject) or
 * [BatchUpsertCatalogObjects]($e/Catalog/BatchUpsertCatalogObjects) to
 * create a [CatalogObject]($m/CatalogObject) instance, you can supply
 * a temporary ID for the to-be-created object, especially when the object is to be referenced
 * elsewhere in the same request body. This temporary ID can be any string unique within
 * the call, but must be prefixed by "#".
 * After the request is submitted and the object created, a permanent server-generated ID is assigned
 * to the new object. The permanent ID is unique across the Square catalog.
 */
export interface CatalogIdMapping {
  /** The client-supplied temporary `#`-prefixed ID for a new `CatalogObject`. */
  clientObjectId?: string | null;
  /** The permanent ID for the CatalogObject created by the server. */
  objectId?: string | null;
}

export const catalogIdMappingSchema: Schema<CatalogIdMapping> = object({
  clientObjectId: ['client_object_id', optional(nullable(string()))],
  objectId: ['object_id', optional(nullable(string()))],
});
