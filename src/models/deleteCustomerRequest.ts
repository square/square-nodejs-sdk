import { bigint, object, optional, Schema } from '../schema';

/**
 * Defines the fields that are included in a request to the `DeleteCustomer`
 * endpoint.
 */
export interface DeleteCustomerRequest {
  /**
   * The current version of the customer profile.
   * As a best practice, you should include this parameter to enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency) control.  For more information, see [Delete a customer profile](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#delete-customer-profile).
   */
  version?: bigint;
}

export const deleteCustomerRequestSchema: Schema<DeleteCustomerRequest> = object(
  { version: ['version', optional(bigint())] }
);
