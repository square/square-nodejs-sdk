import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { InventoryChange, inventoryChangeSchema } from './inventoryChange';

export interface RetrieveInventoryChangesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The set of inventory changes for the requested object and locations. */
  changes?: InventoryChange[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset,
   * this is the final response.
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   */
  cursor?: string;
}

export const retrieveInventoryChangesResponseSchema: Schema<RetrieveInventoryChangesResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    changes: ['changes', optional(array(lazy(() => inventoryChangeSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
