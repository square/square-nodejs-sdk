import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';

/** Represents a Square gift card. */
export interface GiftCard {
  /** The Square-assigned ID of the gift card. */
  id?: string;
  /** Indicates the gift card type. */
  type: string;
  /**
   * Indicates the source that generated the gift card
   * account number (GAN).
   */
  ganSource?: string;
  /** Indicates the gift card state. */
  state?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  balanceMoney?: Money;
  /**
   * The gift card account number (GAN). Buyers can use the GAN to make purchases or check
   * the gift card balance.
   */
  gan?: string | null;
  /**
   * The timestamp when the gift card was created, in RFC 3339 format.
   * In the case of a digital gift card, it is the time when you create a card
   * (using the Square Point of Sale application, Seller Dashboard, or Gift Cards API).
   * In the case of a plastic gift card, it is the time when Square associates the card with the
   * seller at the time of activation.
   */
  createdAt?: string;
  /** The IDs of the [customer profiles](entity:Customer) to whom this gift card is linked. */
  customerIds?: string[];
}

export const giftCardSchema: Schema<GiftCard> = object({
  id: ['id', optional(string())],
  type: ['type', string()],
  ganSource: ['gan_source', optional(string())],
  state: ['state', optional(string())],
  balanceMoney: ['balance_money', optional(lazy(() => moneySchema))],
  gan: ['gan', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  customerIds: ['customer_ids', optional(array(string()))],
});
