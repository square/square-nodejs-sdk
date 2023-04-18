import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/** Represents a contact of a [Vendor]($m/Vendor). */
export interface VendorContact {
  /**
   * A unique Square-generated ID for the [VendorContact](entity:VendorContact).
   * This field is required when attempting to update a [VendorContact](entity:VendorContact).
   */
  id?: string;
  /**
   * The name of the [VendorContact](entity:VendorContact).
   * This field is required when attempting to create a [Vendor](entity:Vendor).
   */
  name?: string | null;
  /** The email address of the [VendorContact](entity:VendorContact). */
  emailAddress?: string | null;
  /** The phone number of the [VendorContact](entity:VendorContact). */
  phoneNumber?: string | null;
  /** The state of the [VendorContact](entity:VendorContact). */
  removed?: boolean | null;
  /** The ordinal of the [VendorContact](entity:VendorContact). */
  ordinal: number;
}

export const vendorContactSchema: Schema<VendorContact> = object({
  id: ['id', optional(string())],
  name: ['name', optional(nullable(string()))],
  emailAddress: ['email_address', optional(nullable(string()))],
  phoneNumber: ['phone_number', optional(nullable(string()))],
  removed: ['removed', optional(nullable(boolean()))],
  ordinal: ['ordinal', number()],
});
