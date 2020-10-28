import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { InventoryCount, inventoryCountSchema } from './inventoryCount';

export interface BatchChangeInventoryResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The current counts for all objects referenced in the request. */
  counts?: InventoryCount[];
}

export const batchChangeInventoryResponseSchema: Schema<BatchChangeInventoryResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    counts: ['counts', optional(array(lazy(() => inventoryCountSchema)))],
  }
);
