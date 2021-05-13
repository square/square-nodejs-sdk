import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Order, orderSchema } from './order';

/**
 * Defines the fields that are included in the response body of
 * a request to the `BatchRetrieveOrders` endpoint.
 */
export interface BatchRetrieveOrdersResponse {
  /** The requested orders. This will omit any requested orders that do not exist. */
  orders?: Order[];
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const batchRetrieveOrdersResponseSchema: Schema<BatchRetrieveOrdersResponse> = object(
  {
    orders: ['orders', optional(array(lazy(() => orderSchema)))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
