import { object, Schema, string } from '../schema';

/** Filter events by the order associated with the event. */
export interface LoyaltyEventOrderFilter {
  /** The ID of the [order](#type-Order) associated with the event. */
  orderId: string;
}

export const loyaltyEventOrderFilterSchema: Schema<LoyaltyEventOrderFilter> = object(
  { orderId: ['order_id', string()] }
);
