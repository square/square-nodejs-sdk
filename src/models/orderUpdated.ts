import { number, object, optional, Schema, string } from '../schema';

export interface OrderUpdated {
  /** The order's unique ID. */
  orderId?: string;
  /**
   * Version number which is incremented each time an update is committed to the order.
   * Orders that were not created through the API will not include a version and
   * thus cannot be updated.
   * [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders)
   */
  version?: number;
  /** The ID of the merchant location this order is associated with. */
  locationId?: string;
  /** The state of the order. */
  state?: string;
  /** Timestamp for when the order was created in RFC 3339 format. */
  createdAt?: string;
  /** Timestamp for when the order was last updated in RFC 3339 format. */
  updatedAt?: string;
}

export const orderUpdatedSchema: Schema<OrderUpdated> = object({
  orderId: ['order_id', optional(string())],
  version: ['version', optional(number())],
  locationId: ['location_id', optional(string())],
  state: ['state', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
