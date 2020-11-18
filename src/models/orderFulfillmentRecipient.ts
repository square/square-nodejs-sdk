import { lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';

/** Contains information on the recipient of a fulfillment. */
export interface OrderFulfillmentRecipient {
  /**
   * The Customer ID of the customer associated with the fulfillment.
   * If `customer_id` is provided, the fulfillment recipient's `display_name`,
   * `email_address`, and `phone_number` are automatically populated from the
   * targeted customer profile. If these fields are set in the request, the request
   * values will override the information from the customer profile. If the
   * targeted customer profile does not contain the necessary information and
   * these fields are left unset, the request will result in an error.
   */
  customerId?: string;
  /**
   * The display name of the fulfillment recipient.
   * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
   */
  displayName?: string;
  /**
   * The email address of the fulfillment recipient.
   * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
   */
  emailAddress?: string;
  /**
   * The phone number of the fulfillment recipient.
   * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
   */
  phoneNumber?: string;
  /** Represents a physical address. */
  address?: Address;
}

export const orderFulfillmentRecipientSchema: Schema<OrderFulfillmentRecipient> = object(
  {
    customerId: ['customer_id', optional(string())],
    displayName: ['display_name', optional(string())],
    emailAddress: ['email_address', optional(string())],
    phoneNumber: ['phone_number', optional(string())],
    address: ['address', optional(lazy(() => addressSchema))],
  }
);
