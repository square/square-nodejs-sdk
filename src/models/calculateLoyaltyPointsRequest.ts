import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents a [CalculateLoyaltyPoints]($e/Loyalty/CalculateLoyaltyPoints) request. */
export interface CalculateLoyaltyPointsRequest {
  /**
   * The [order](entity:Order) ID for which to calculate the points.
   * Specify this field if your application uses the Orders API to process orders.
   * Otherwise, specify the `transaction_amount_money`.
   */
  orderId?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  transactionAmountMoney?: Money;
  /**
   * The ID of the target [loyalty account](entity:LoyaltyAccount). Optionally specify this field
   * if your application uses the Orders API to process orders.
   * If specified, the `promotion_points` field in the response shows the number of points the buyer would
   * earn from the purchase. In this case, Square uses the account ID to determine whether the promotion's
   * `trigger_limit` (the maximum number of times that a buyer can trigger the promotion) has been reached.
   * If not specified, the `promotion_points` field shows the number of points the purchase qualifies
   * for regardless of the trigger limit.
   */
  loyaltyAccountId?: string | null;
}

export const calculateLoyaltyPointsRequestSchema: Schema<CalculateLoyaltyPointsRequest> = object(
  {
    orderId: ['order_id', optional(nullable(string()))],
    transactionAmountMoney: [
      'transaction_amount_money',
      optional(lazy(() => moneySchema)),
    ],
    loyaltyAccountId: ['loyalty_account_id', optional(nullable(string()))],
  }
);
