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
   * A unique Square-generated ID for the [VendorContact]($m/VendorContact).
   * This field is required when attempting to update a [VendorContact]($m/VendorContact).
   */
  id?: string;
  /**
   * The name of the [VendorContact]($m/VendorContact).
   * This field is required when attempting to create a [Vendor]($m/Vendor).
   */
  name?: string | null;
  /** The email address of the [VendorContact]($m/VendorContact). */
  emailAddress?: string | null;
  /** The phone number of the [VendorContact]($m/VendorContact). */
  phoneNumber?: string | null;
  /** The state of the [VendorContact]($m/VendorContact). */
  removed?: boolean | null;
  /** The ordinal of the [VendorContact]($m/VendorContact). */
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
