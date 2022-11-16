import { array, nullable, object, optional, Schema, string } from '../schema';

export interface BatchDeleteCatalogObjectsRequest {
  /**
   * The IDs of the CatalogObjects to be deleted. When an object is deleted, other objects
   * in the graph that depend on that object will be deleted as well (for example, deleting a
   * CatalogItem will delete its CatalogItemVariation.
   */
  objectIds?: string[] | null;
}

export const batchDeleteCatalogObjectsRequestSchema: Schema<BatchDeleteCatalogObjectsRequest> = object(
  { objectIds: ['object_ids', optional(nullable(array(string())))] }
);
