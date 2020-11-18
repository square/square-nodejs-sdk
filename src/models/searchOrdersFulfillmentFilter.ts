import { array, object, optional, Schema, string } from '../schema';

/** Filter based on [Order Fulfillment](#type-orderfulfillment) information. */
export interface SearchOrdersFulfillmentFilter {
  /**
   * List of [fulfillment types](#type-orderfulfillmenttype) to filter
   * for. Will return orders if any of its fulfillments match any of the fulfillment types
   * listed in this field.
   * See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values
   */
  fulfillmentTypes?: string[];
  /**
   * List of [fulfillment states](#type-orderfulfillmentstate) to filter
   * for. Will return orders if any of its fulfillments match any of the
   * fulfillment states listed in this field.
   * See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values
   */
  fulfillmentStates?: string[];
}

export const searchOrdersFulfillmentFilterSchema: Schema<SearchOrdersFulfillmentFilter> = object(
  {
    fulfillmentTypes: ['fulfillment_types', optional(array(string()))],
    fulfillmentStates: ['fulfillment_states', optional(array(string()))],
  }
);
