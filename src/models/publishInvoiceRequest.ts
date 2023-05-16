import { nullable, number, object, optional, Schema, string } from '../schema';

/** Describes a `PublishInvoice` request. */
export interface PublishInvoiceRequest {
  /**
   * The version of the [invoice](entity:Invoice) to publish.
   * This must match the current version of the invoice; otherwise, the request is rejected.
   */
  version: number;
  /**
   * A unique string that identifies the `PublishInvoice` request. If you do not
   * provide `idempotency_key` (or provide an empty string as the value), the endpoint
   * treats each request as independent.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
}

export const publishInvoiceRequestSchema: Schema<PublishInvoiceRequest> = object(
  {
    version: ['version', number()],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
  }
);
