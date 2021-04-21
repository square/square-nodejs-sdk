import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { PaymentRefund, paymentRefundSchema } from './paymentRefund';

/**
 * Defines the response returned by
 * [RefundPayment]($e/Refunds/RefundPayment).
 * If there are errors processing the request, the `refund` field might not be
 * present, or it might be present with a status of `FAILED`.
 */
export interface RefundPaymentResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a refund of a payment made using Square. Contains information about
   * the original payment and the amount of money refunded.
   */
  refund?: PaymentRefund;
}

export const refundPaymentResponseSchema: Schema<RefundPaymentResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refund: ['refund', optional(lazy(() => paymentRefundSchema))],
  }
);
