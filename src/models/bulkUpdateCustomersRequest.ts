import { dict, lazy, object, Schema } from '../schema';
import {
  BulkUpdateCustomerData,
  bulkUpdateCustomerDataSchema,
} from './bulkUpdateCustomerData';

/**
 * Defines the body parameters that can be included in requests to the
 * [BulkUpdateCustomers]($e/Customers/BulkUpdateCustomers) endpoint.
 */
export interface BulkUpdateCustomersRequest {
  /**
   * A map of 1 to 100 individual update requests, represented by `customer ID: { customer data }`
   * key-value pairs.
   * Each key is the ID of the [customer profile](entity:Customer) to update. To update a customer profile
   * that was created by merging existing profiles, provide the ID of the newly created profile.
   * Each value contains the updated customer data. Only new or changed fields are required. To add or
   * update a field, specify the new value. To remove a field, specify `null`.
   */
  customers: Record<string, BulkUpdateCustomerData>;
}

export const bulkUpdateCustomersRequestSchema: Schema<BulkUpdateCustomersRequest> = object(
  { customers: ['customers', dict(lazy(() => bulkUpdateCustomerDataSchema))] }
);
