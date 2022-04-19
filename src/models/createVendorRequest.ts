import { lazy, object, optional, Schema, string } from '../schema';
import { Vendor, vendorSchema } from './vendor';

/** Represents an input to a call to [CreateVendor]($e/Vendors/CreateVendor). */
export interface CreateVendorRequest {
  /**
   * A client-supplied, universally unique identifier (UUID) to make this [CreateVendor]($e/Vendors/CreateVendor) call idempotent.
   * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) in the
   * [API Development 101](https://developer.squareup.com/docs/basics/api101/overview) section for more
   * information.
   */
  idempotencyKey: string;
  /** Represents a supplier to a seller. */
  vendor?: Vendor;
}

export const createVendorRequestSchema: Schema<CreateVendorRequest> = object({
  idempotencyKey: ['idempotency_key', string()],
  vendor: ['vendor', optional(lazy(() => vendorSchema))],
});
