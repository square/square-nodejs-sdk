import { array, nullable, object, optional, Schema, string } from '../schema';

/**
 * A filter based on the order `customer_id` and any tender `customer_id`
 * associated with the order. It does not filter based on the
 * [FulfillmentRecipient]($m/FulfillmentRecipient) `customer_id`.
 */
export interface SearchOrdersCustomerFilter {
  /**
   * A list of customer IDs to filter by.
   * Max: 10 customer ids.
   */
  customerIds?: string[] | null;
}

export const searchOrdersCustomerFilterSchema: Schema<SearchOrdersCustomerFilter> = object(
  { customerIds: ['customer_ids', optional(nullable(array(string())))] }
);
