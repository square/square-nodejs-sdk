import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  InventoryAdjustment,
  inventoryAdjustmentSchema,
} from './inventoryAdjustment';

export interface RetrieveInventoryAdjustmentResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a change in state or quantity of product inventory at a
   * particular time and location.
   */
  adjustment?: InventoryAdjustment;
}

export const retrieveInventoryAdjustmentResponseSchema: Schema<RetrieveInventoryAdjustmentResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    adjustment: ['adjustment', optional(lazy(() => inventoryAdjustmentSchema))],
  }
);
