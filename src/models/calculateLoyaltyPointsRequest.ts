import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * A request to calculate the points that a buyer can earn from
 * a specified purchase.
 */
export interface CalculateLoyaltyPointsRequest {
  /**
   * The [order](#type-Order) ID for which to calculate the points.
   * Specify this field if your application uses the Orders API to process orders.
   * Otherwise, specify the `transaction_amount`.
   */
  orderId?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  transactionAmountMoney?: Money;
}

export const calculateLoyaltyPointsRequestSchema: Schema<CalculateLoyaltyPointsRequest> = object(
  {
    orderId: ['order_id', optional(string())],
    transactionAmountMoney: [
      'transaction_amount_money',
      optional(lazy(() => moneySchema)),
    ],
  }
);
