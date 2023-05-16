import { nullable, number, object, optional, Schema, string } from '../schema';

/**
 * Defines the fields that are included in requests to the
 * [CloneOrder]($e/Orders/CloneOrder) endpoint.
 */
export interface CloneOrderRequest {
  /** The ID of the order to clone. */
  orderId: string;
  /**
   * An optional order version for concurrency protection.
   * If a version is provided, it must match the latest stored version of the order to clone.
   * If a version is not provided, the API clones the latest version.
   */
  version?: number;
  /**
   * A value you specify that uniquely identifies this clone request.
   * If you are unsure whether a particular order was cloned successfully,
   * you can reattempt the call with the same idempotency key without
   * worrying about creating duplicate cloned orders.
   * The originally cloned order is returned.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
}

export const cloneOrderRequestSchema: Schema<CloneOrderRequest> = object({
  orderId: ['order_id', string()],
  version: ['version', optional(number())],
  idempotencyKey: ['idempotency_key', optional(nullable(string()))],
});
