import { array, object, Schema, string } from '../schema';

/**
 * Defines the fields that are included in requests to the
 * BatchRetrieveOrders endpoint.
 */
export interface BatchRetrieveOrdersRequest {
  /** The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request. */
  orderIds: string[];
}

export const batchRetrieveOrdersRequestSchema: Schema<BatchRetrieveOrdersRequest> = object(
  { orderIds: ['order_ids', array(string())] }
);
