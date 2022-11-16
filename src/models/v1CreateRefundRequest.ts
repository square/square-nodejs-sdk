import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1CreateRefundRequest */
export interface V1CreateRefundRequest {
  /**
   * The ID of the payment to refund. If you are creating a `PARTIAL`
   * refund for a split tender payment, instead provide the id of the
   * particular tender you want to refund.
   */
  paymentId: string;
  type: string;
  /** The reason for the refund. */
  reason: string;
  refundedMoney?: V1Money;
  /** An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once. */
  requestIdempotenceKey?: string | null;
}

export const v1CreateRefundRequestSchema: Schema<V1CreateRefundRequest> = object(
  {
    paymentId: ['payment_id', string()],
    type: ['type', string()],
    reason: ['reason', string()],
    refundedMoney: ['refunded_money', optional(lazy(() => v1MoneySchema))],
    requestIdempotenceKey: [
      'request_idempotence_key',
      optional(nullable(string())),
    ],
  }
);
