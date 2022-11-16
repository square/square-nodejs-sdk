import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Address, addressSchema } from './address';
import { VendorContact, vendorContactSchema } from './vendorContact';

/** Represents a supplier to a seller. */
export interface Vendor {
  /**
   * A unique Square-generated ID for the [Vendor]($m/Vendor).
   * This field is required when attempting to update a [Vendor]($m/Vendor).
   */
  id?: string;
  /**
   * An RFC 3339-formatted timestamp that indicates when the
   * [Vendor]($m/Vendor) was created.
   */
  createdAt?: string;
  /**
   * An RFC 3339-formatted timestamp that indicates when the
   * [Vendor]($m/Vendor) was last updated.
   */
  updatedAt?: string;
  /**
   * The name of the [Vendor]($m/Vendor).
   * This field is required when attempting to create or update a [Vendor]($m/Vendor).
   */
  name?: string | null;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /** The contacts of the [Vendor]($m/Vendor). */
  contacts?: VendorContact[] | null;
  /** The account number of the [Vendor]($m/Vendor). */
  accountNumber?: string | null;
  /** A note detailing information about the [Vendor]($m/Vendor). */
  note?: string | null;
  /** The version of the [Vendor]($m/Vendor). */
  version?: number;
  /**
   * The status of the [Vendor]($m/Vendor),
   * whether a [Vendor]($m/Vendor) is active or inactive.
   */
  status?: string;
}

export const vendorSchema: Schema<Vendor> = object({
  id: ['id', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  name: ['name', optional(nullable(string()))],
  address: ['address', optional(lazy(() => addressSchema))],
  contacts: [
    'contacts',
    optional(nullable(array(lazy(() => vendorContactSchema)))),
  ],
  accountNumber: ['account_number', optional(nullable(string()))],
  note: ['note', optional(nullable(string()))],
  version: ['version', optional(number())],
  status: ['status', optional(string())],
});
