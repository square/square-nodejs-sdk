import { lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';

/** Contains information about the recipient of a fulfillment. */
export interface OrderFulfillmentRecipient {
  /**
   * The customer ID of the customer associated with the fulfillment.
   * If `customer_id` is provided, the fulfillment recipient's `display_name`,
   * `email_address`, and `phone_number` are automatically populated from the
   * targeted customer profile. If these fields are set in the request, the request
   * values overrides the information from the customer profile. If the
   * targeted customer profile does not contain the necessary information and
   * these fields are left unset, the request results in an error.
   */
  customerId?: string;
  /**
   * The display name of the fulfillment recipient.
   * If provided, the display name overrides the value pulled from the customer profile indicated by `customer_id`.
   */
  displayName?: string;
  /**
   * The email address of the fulfillment recipient.
   * If provided, the email address overrides the value pulled from the customer profile indicated by `customer_id`.
   */
  emailAddress?: string;
  /**
   * The phone number of the fulfillment recipient.
   * If provided, the phone number overrides the value pulled from the customer profile indicated by `customer_id`.
   */
  phoneNumber?: string;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
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
