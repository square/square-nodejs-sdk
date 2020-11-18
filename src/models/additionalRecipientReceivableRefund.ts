import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** A refund of an [AdditionalRecipientReceivable](#type-additionalrecipientreceivable). This includes the ID of the additional recipient receivable associated to this object, as well as a reference to the [Refund](#type-refund) that created this receivable refund. */
export interface AdditionalRecipientReceivableRefund {
  /** The receivable refund's unique ID, issued by Square payments servers. */
  id: string;
  /** The ID of the receivable that the refund was applied to. */
  receivableId: string;
  /** The ID of the refund that is associated to this receivable refund. */
  refundId: string;
  /** The ID of the location that created the receivable. This is the location ID on the associated transaction. */
  transactionLocationId: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
  /** The time when the refund was created, in RFC 3339 format. */
  createdAt?: string;
}

export const additionalRecipientReceivableRefundSchema: Schema<AdditionalRecipientReceivableRefund> = object(
  {
    id: ['id', string()],
    receivableId: ['receivable_id', string()],
    refundId: ['refund_id', string()],
    transactionLocationId: ['transaction_location_id', string()],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    createdAt: ['created_at', optional(string())],
  }
);
