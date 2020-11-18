import { number, object, optional, Schema, string } from '../schema';

/**
 * A lightweight description of an [Order](#type-order) that is returned when `returned_entries` is true on a
 * [SearchOrderRequest](#type-searchorderrequest)
 */
export interface OrderEntry {
  /** The id of the Order */
  orderId?: string;
  /**
   * Version number which is incremented each time an update is committed to the order.
   * Orders that were not created through the API will not include a version and
   * thus cannot be updated.
   * [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders).
   */
  version?: number;
  /** The location id the Order belongs to. */
  locationId?: string;
}

export const orderEntrySchema: Schema<OrderEntry> = object({
  orderId: ['order_id', optional(string())],
  version: ['version', optional(number())],
  locationId: ['location_id', optional(string())],
});
