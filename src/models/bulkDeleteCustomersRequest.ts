import { array, object, Schema, string } from '../schema';

/**
 * Defines the body parameters that can be included in requests to the
 * [BulkDeleteCustomers]($e/Customers/BulkDeleteCustomers) endpoint.
 */
export interface BulkDeleteCustomersRequest {
  /** The IDs of the [customer profiles](entity:Customer) to delete. */
  customerIds: string[];
}

export const bulkDeleteCustomersRequestSchema: Schema<BulkDeleteCustomersRequest> = object(
  { customerIds: ['customer_ids', array(string())] }
);
