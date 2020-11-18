import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Refunds a payment. */
export interface RefundPaymentRequest {
  /**
   * A unique string that identifies this `RefundPayment` request. The key can be any valid string
   * but must be unique for every `RefundPayment` request.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  idempotencyKey: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  appFeeMoney?: Money;
  /** The unique ID of the payment being refunded. */
  paymentId: string;
  /** A description of the reason for the refund. */
  reason?: string;
}

export const refundPaymentRequestSchema: Schema<RefundPaymentRequest> = object({
  idempotencyKey: ['idempotency_key', string()],
  amountMoney: ['amount_money', lazy(() => moneySchema)],
  appFeeMoney: ['app_fee_money', optional(lazy(() => moneySchema))],
  paymentId: ['payment_id', string()],
  reason: ['reason', optional(string())],
});
