import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { InventoryChange, inventoryChangeSchema } from './inventoryChange';

export interface BatchRetrieveInventoryChangesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The current calculated inventory changes for the requested objects
   * and locations.
   */
  changes?: InventoryChange[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset,
   * this is the final response.
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   */
  cursor?: string;
}

export const batchRetrieveInventoryChangesResponseSchema: Schema<BatchRetrieveInventoryChangesResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    changes: ['changes', optional(array(lazy(() => inventoryChangeSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
