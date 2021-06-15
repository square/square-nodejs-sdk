import { object, Schema, string } from '../schema';

/** A request to unlink a customer to a gift card */
export interface UnlinkCustomerFromGiftCardRequest {
  customerId: string;
}

export const unlinkCustomerFromGiftCardRequestSchema: Schema<UnlinkCustomerFromGiftCardRequest> = object(
  { customerId: ['customer_id', string()] }
);
