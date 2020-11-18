import { array, lazy, object, optional, Schema } from '../schema';
import { V1InventoryEntry, v1InventoryEntrySchema } from './v1InventoryEntry';

export interface V1ListInventoryResponse {
  items?: V1InventoryEntry[];
}

export const v1ListInventoryResponseSchema: Schema<V1ListInventoryResponse> = object(
  { items: ['items', optional(array(lazy(() => v1InventoryEntrySchema)))] }
);
