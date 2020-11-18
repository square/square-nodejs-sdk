import { lazy, object, optional, Schema } from '../schema';
import { OrderCreated, orderCreatedSchema } from './orderCreated';

export interface OrderCreatedObject {
  orderCreated?: OrderCreated;
}

export const orderCreatedObjectSchema: Schema<OrderCreatedObject> = object({
  orderCreated: ['order_created', optional(lazy(() => orderCreatedSchema))],
});
