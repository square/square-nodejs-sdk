import { nullable, number, object, optional, Schema, string } from '../schema';

export interface OrderUpdated {
  /** The order's unique ID. */
  orderId?: string | null;
  /**
   * The version number, which is incremented each time an update is committed to the order.
   * Orders that were not created through the API do not include a version number and
   * therefore cannot be updated.
   * [Read more about working with versions.](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders)
   */
  version?: number;
  /** The ID of the seller location that this order is associated with. */
  locationId?: string | null;
  /** The state of the order. */
  state?: string;
  /** The timestamp for when the order was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp for when the order was last updated, in RFC 3339 format. */
  updatedAt?: string;
}

export const orderUpdatedSchema: Schema<OrderUpdated> = object({
  orderId: ['order_id', optional(nullable(string()))],
  version: ['version', optional(number())],
  locationId: ['location_id', optional(nullable(string()))],
  state: ['state', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
