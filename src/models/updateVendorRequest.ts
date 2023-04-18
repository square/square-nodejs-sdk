import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Vendor, vendorSchema } from './vendor';

/** Represents an input to a call to [UpdateVendor]($e/Vendors/UpdateVendor). */
export interface UpdateVendorRequest {
  /**
   * A client-supplied, universally unique identifier (UUID) for the
   * request.
   * See [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) in the
   * [API Development 101](https://developer.squareup.com/docs/buildbasics) section for more
   * information.
   */
  idempotencyKey?: string | null;
  /** Represents a supplier to a seller. */
  vendor: Vendor;
}

export const updateVendorRequestSchema: Schema<UpdateVendorRequest> = object({
  idempotencyKey: ['idempotency_key', optional(nullable(string()))],
  vendor: ['vendor', lazy(() => vendorSchema)],
});
