import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Order, orderSchema } from './order';

/**
 * Defines the fields that are included in the response body of
 * a request to the [UpdateOrder]($e/Orders/UpdateOrder) endpoint.
 */
export interface UpdateOrderResponse {
  /**
   * Contains all information related to a single order to process with Square,
   * including line items that specify the products to purchase. `Order` objects also
   * include information about any associated tenders, refunds, and returns.
   * All Connect V2 Transactions have all been converted to Orders including all associated
   * itemization data.
   */
  order?: Order;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const updateOrderResponseSchema: Schema<UpdateOrderResponse> = object({
  order: ['order', optional(lazy(() => orderSchema))],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
