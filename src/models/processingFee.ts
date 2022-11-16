import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents the Square processing fee. */
export interface ProcessingFee {
  /** The timestamp of when the fee takes effect, in RFC 3339 format. */
  effectiveAt?: string | null;
  /** The type of fee assessed or adjusted. The fee type can be `INITIAL` or `ADJUSTMENT`. */
  type?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney?: Money;
}

export const processingFeeSchema: Schema<ProcessingFee> = object({
  effectiveAt: ['effective_at', optional(nullable(string()))],
  type: ['type', optional(nullable(string()))],
  amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
});
