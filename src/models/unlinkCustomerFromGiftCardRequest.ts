import { object, Schema, string } from '../schema';

/** A request to unlink a customer from a gift card. */
export interface UnlinkCustomerFromGiftCardRequest {
  /** The ID of the customer to unlink from the gift card. */
  customerId: string;
}

export const unlinkCustomerFromGiftCardRequestSchema: Schema<UnlinkCustomerFromGiftCardRequest> = object(
  { customerId: ['customer_id', string()] }
);
