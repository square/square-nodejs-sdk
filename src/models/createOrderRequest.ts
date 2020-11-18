import { lazy, object, optional, Schema, string } from '../schema';
import { Order, orderSchema } from './order';

export interface CreateOrderRequest {
  /**
   * Contains all information related to a single order to process with Square,
   * including line items that specify the products to purchase. Order objects also
   * include information on any associated tenders, refunds, and returns.
   * All Connect V2 Transactions have all been converted to Orders including all associated
   * itemization data.
   */
  order?: Order;
  /** The ID of the business location to associate the order with. */
  locationId?: string;
  /**
   * A value you specify that uniquely identifies this
   * order among orders you've created.
   * If you're unsure whether a particular order was created successfully,
   * you can reattempt it with the same idempotency key without
   * worrying about creating duplicate orders.
   * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
   */
  idempotencyKey?: string;
}

export const createOrderRequestSchema: Schema<CreateOrderRequest> = object({
  order: ['order', optional(lazy(() => orderSchema))],
  locationId: ['location_id', optional(string())],
  idempotencyKey: ['idempotency_key', optional(string())],
});
