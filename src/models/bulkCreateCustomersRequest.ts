import { dict, lazy, object, Schema } from '../schema';
import {
  BulkCreateCustomerData,
  bulkCreateCustomerDataSchema,
} from './bulkCreateCustomerData';

/**
 * Defines the body parameters that can be included in requests to the
 * [BulkCreateCustomers]($e/Customers/BulkCreateCustomers) endpoint.
 */
export interface BulkCreateCustomersRequest {
  /**
   * A map of 1 to 100 individual create requests, represented by `idempotency key: { customer data }`
   * key-value pairs.
   * Each key is an [idempotency key](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency)
   * that uniquely identifies the create request. Each value contains the customer data used to create the
   * customer profile.
   */
  customers: Record<string, BulkCreateCustomerData>;
}

export const bulkCreateCustomersRequestSchema: Schema<BulkCreateCustomersRequest> = object(
  { customers: ['customers', dict(lazy(() => bulkCreateCustomerDataSchema))] }
);
