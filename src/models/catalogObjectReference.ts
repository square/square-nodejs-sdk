import { bigint, object, optional, Schema, string } from '../schema';

/**
 * A reference to a Catalog object at a specific version. In general this is
 * used as an entry point into a graph of catalog objects, where the objects exist
 * at a specific version.
 */
export interface CatalogObjectReference {
  /** The ID of the referenced object. */
  objectId?: string;
  /** The version of the object. */
  catalogVersion?: bigint;
}

export const catalogObjectReferenceSchema: Schema<CatalogObjectReference> = object(
  {
    objectId: ['object_id', optional(string())],
    catalogVersion: ['catalog_version', optional(bigint())],
  }
);
