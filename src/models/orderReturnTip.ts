import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** A tip being returned. */
export interface OrderReturnTip {
  /** A unique ID that identifies the tip only within this order. */
  uid?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  appliedMoney?: Money;
  /** The tender `uid` from the order that contains the original application of this tip. */
  sourceTenderUid?: string | null;
  /** The tender `id` from the order that contains the original application of this tip. */
  sourceTenderId?: string | null;
}

export const orderReturnTipSchema: Schema<OrderReturnTip> = object({
  uid: ['uid', optional(nullable(string()))],
  appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
  sourceTenderUid: ['source_tender_uid', optional(nullable(string()))],
  sourceTenderId: ['source_tender_id', optional(nullable(string()))],
});
