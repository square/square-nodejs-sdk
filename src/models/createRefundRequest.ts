import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * Defines the body parameters that can be included in
 * a request to the [CreateRefund](api-endpoint:Transactions-CreateRefund) endpoint.
 * Deprecated - recommend using [RefundPayment](api-endpoint:Refunds-RefundPayment)
 */
export interface CreateRefundRequest {
  /**
   * A value you specify that uniquely identifies this
   * refund among refunds you've created for the tender.
   * If you're unsure whether a particular refund succeeded,
   * you can reattempt it with the same idempotency key without
   * worrying about duplicating the refund.
   * See [Idempotency keys](https://developer.squareup.com/docs/working-with-apis/idempotency) for more information.
   */
  idempotencyKey: string;
  /**
   * The ID of the tender to refund.
   * A [`Transaction`](entity:Transaction) has one or more `tenders` (i.e., methods
   * of payment) associated with it, and you refund each tender separately with
   * the Connect API.
   */
  tenderId: string;
  /**
   * A description of the reason for the refund.
   * Default value: `Refund via API`
   */
  reason?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
}

export const createRefundRequestSchema: Schema<CreateRefundRequest> = object({
  idempotencyKey: ['idempotency_key', string()],
  tenderId: ['tender_id', string()],
  reason: ['reason', optional(string())],
  amountMoney: ['amount_money', lazy(() => moneySchema)],
});
