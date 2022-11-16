import { array, nullable, object, optional, Schema, string } from '../schema';

/**
 * Defines the fields that are included in requests to the
 * `BatchRetrieveOrders` endpoint.
 */
export interface BatchRetrieveOrdersRequest {
  /**
   * The ID of the location for these orders. This field is optional: omit it to retrieve
   * orders within the scope of the current authorization's merchant ID.
   */
  locationId?: string | null;
  /** The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request. */
  orderIds: string[];
}

export const batchRetrieveOrdersRequestSchema: Schema<BatchRetrieveOrdersRequest> = object(
  {
    locationId: ['location_id', optional(nullable(string()))],
    orderIds: ['order_ids', array(string())],
  }
);
