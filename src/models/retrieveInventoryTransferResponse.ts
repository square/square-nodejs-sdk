import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import {
  InventoryTransfer,
  inventoryTransferSchema,
} from './inventoryTransfer';

export interface RetrieveInventoryTransferResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents the transfer of a quantity of product inventory at a
   * particular time from one location to another.
   */
  transfer?: InventoryTransfer;
}

export const retrieveInventoryTransferResponseSchema: Schema<RetrieveInventoryTransferResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    transfer: ['transfer', optional(lazy(() => inventoryTransferSchema))],
  }
);
