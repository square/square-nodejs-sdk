import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

export interface TerminalRefund {
  /** A unique ID for this `TerminalRefund` */
  id?: string;
  /** The reference to the payment refund created by completing this `TerminalRefund`. */
  refundId?: string;
  /** Unique ID of the payment being refunded. */
  paymentId: string;
  /** The reference to the Square order id for the payment identified by the `payment_id`. */
  orderId?: string;
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
   * A description of the reason for the refund.
   * Note: maximum 192 characters
   */
  reason?: string;
  /**
   * The unique Id of the device intended for this `TerminalRefund`.
   * The Id can be retrieved from /v2/devices api.
   */
  deviceId?: string;
  /**
   * The duration as an RFC 3339 duration, after which the refund will be automatically canceled.
   * TerminalRefunds that are `PENDING` will be automatically `CANCELED` and have a cancellation reason
   * of `TIMED_OUT`
   * Default: 5 minutes from creation
   * Maximum: 5 minutes
   */
  deadlineDuration?: string;
  /**
   * The status of the `TerminalRefund`.
   * Options: `PENDING`, `IN_PROGRESS`, `CANCELED`, `COMPLETED`
   */
  status?: string;
  cancelReason?: string;
  /** The time when the `TerminalRefund` was created as an RFC 3339 timestamp. */
  createdAt?: string;
  /** The time when the `TerminalRefund` was last updated as an RFC 3339 timestamp. */
  updatedAt?: string;
}

export const terminalRefundSchema: Schema<TerminalRefund> = object({
  id: ['id', optional(string())],
  refundId: ['refund_id', optional(string())],
  paymentId: ['payment_id', string()],
  orderId: ['order_id', optional(string())],
  amountMoney: ['amount_money', lazy(() => moneySchema)],
  reason: ['reason', optional(string())],
  deviceId: ['device_id', optional(string())],
  deadlineDuration: ['deadline_duration', optional(string())],
  status: ['status', optional(string())],
  cancelReason: ['cancel_reason', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
