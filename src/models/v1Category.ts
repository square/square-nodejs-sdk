import { object, optional, Schema, string } from '../schema';

/** V1Category */
export interface V1Category {
  /** The category's unique ID. */
  id?: string;
  /** The category's name. */
  name?: string;
  /** The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. */
  v2Id?: string;
}

export const v1CategorySchema: Schema<V1Category> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  v2Id: ['v2_id', optional(string())],
});
