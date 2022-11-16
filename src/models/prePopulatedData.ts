import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';

/**
 * Describes buyer data to prepopulate in the payment form.
 * For more information,
 * see [Optional Checkout Configurations](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations).
 */
export interface PrePopulatedData {
  /** The buyer email to prepopulate in the payment form. */
  buyerEmail?: string | null;
  /** The buyer phone number to prepopulate in the payment form. */
  buyerPhoneNumber?: string | null;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  buyerAddress?: Address;
}

export const prePopulatedDataSchema: Schema<PrePopulatedData> = object({
  buyerEmail: ['buyer_email', optional(nullable(string()))],
  buyerPhoneNumber: ['buyer_phone_number', optional(nullable(string()))],
  buyerAddress: ['buyer_address', optional(lazy(() => addressSchema))],
});
