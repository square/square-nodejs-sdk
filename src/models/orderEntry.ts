import { nullable, number, object, optional, Schema, string } from '../schema';

/**
 * A lightweight description of an [order]($m/Order) that is returned when
 * `returned_entries` is `true` on a [SearchOrdersRequest]($e/Orders/SearchOrders).
 */
export interface OrderEntry {
  /** The ID of the order. */
  orderId?: string | null;
  /**
   * The version number, which is incremented each time an update is committed to the order.
   * Orders that were not created through the API do not include a version number and
   * therefore cannot be updated.
   * [Read more about working with versions.](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders)
   */
  version?: number;
  /** The location ID the order belongs to. */
  locationId?: string | null;
}

export const orderEntrySchema: Schema<OrderEntry> = object({
  orderId: ['order_id', optional(nullable(string()))],
  version: ['version', optional(number())],
  locationId: ['location_id', optional(nullable(string()))],
});
