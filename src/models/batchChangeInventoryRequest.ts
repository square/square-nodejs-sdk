import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { InventoryChange, inventoryChangeSchema } from './inventoryChange';

export interface BatchChangeInventoryRequest {
  /**
   * A client-supplied, universally unique identifier (UUID) for the
   * request.
   * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) in the
   * [API Development 101](https://developer.squareup.com/docs/basics/api101/overview) section for more
   * information.
   */
  idempotencyKey?: string;
  /**
   * The set of physical counts and inventory adjustments to be made.
   * Changes are applied based on the client-supplied timestamp and may be sent
   * out of order.
   */
  changes?: InventoryChange[];
  /**
   * Indicates whether the current physical count should be ignored if
   * the quantity is unchanged since the last physical count. Default: `true`.
   */
  ignoreUnchangedCounts?: boolean;
}

export const batchChangeInventoryRequestSchema: Schema<BatchChangeInventoryRequest> = object(
  {
    idempotencyKey: ['idempotency_key', optional(string())],
    changes: ['changes', optional(array(lazy(() => inventoryChangeSchema)))],
    ignoreUnchangedCounts: ['ignore_unchanged_counts', optional(boolean())],
  }
);
