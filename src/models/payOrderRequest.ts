import { array, number, object, optional, Schema, string } from '../schema';

/**
 * Defines the fields that are included in requests to the
 * [PayOrder](#endpoint-payorder) endpoint.
 */
export interface PayOrderRequest {
  /**
   * A value you specify that uniquely identifies this request among requests you've sent. If
   * you're unsure whether a particular payment request was completed successfully, you can reattempt
   * it with the same idempotency key without worrying about duplicate payments.
   * See [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) for more information.
   */
  idempotencyKey: string;
  /** The version of the order being paid. If not supplied, the latest version will be paid. */
  orderVersion?: number;
  /**
   * The IDs of the [payments](#type-payment) to collect.
   * The payment total must match the order total.
   */
  paymentIds?: string[];
}

export const payOrderRequestSchema: Schema<PayOrderRequest> = object({
  idempotencyKey: ['idempotency_key', string()],
  orderVersion: ['order_version', optional(number())],
  paymentIds: ['payment_ids', optional(array(string()))],
});
