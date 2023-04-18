import {
  array,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/**
 * Defines the fields that are included in requests to the
 * [PayOrder]($e/Orders/PayOrder) endpoint.
 */
export interface PayOrderRequest {
  /**
   * A value you specify that uniquely identifies this request among requests you have sent. If
   * you are unsure whether a particular payment request was completed successfully, you can reattempt
   * it with the same idempotency key without worrying about duplicate payments.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  idempotencyKey: string;
  /** The version of the order being paid. If not supplied, the latest version will be paid. */
  orderVersion?: number | null;
  /**
   * The IDs of the [payments](entity:Payment) to collect.
   * The payment total must match the order total.
   */
  paymentIds?: string[] | null;
}

export const payOrderRequestSchema: Schema<PayOrderRequest> = object({
  idempotencyKey: ['idempotency_key', string()],
  orderVersion: ['order_version', optional(nullable(number()))],
  paymentIds: ['payment_ids', optional(nullable(array(string())))],
});
