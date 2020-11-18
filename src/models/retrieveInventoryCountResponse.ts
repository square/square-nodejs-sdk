import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { InventoryCount, inventoryCountSchema } from './inventoryCount';

export interface RetrieveInventoryCountResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The current calculated inventory counts for the requested object and
   * locations.
   */
  counts?: InventoryCount[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset,
   * this is the final response.
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   */
  cursor?: string;
}

export const retrieveInventoryCountResponseSchema: Schema<RetrieveInventoryCountResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    counts: ['counts', optional(array(lazy(() => inventoryCountSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
