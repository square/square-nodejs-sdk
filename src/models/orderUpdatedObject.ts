import { lazy, object, optional, Schema } from '../schema';
import { OrderUpdated, orderUpdatedSchema } from './orderUpdated';

export interface OrderUpdatedObject {
  orderUpdated?: OrderUpdated;
}

export const orderUpdatedObjectSchema: Schema<OrderUpdatedObject> = object({
  orderUpdated: ['order_updated', optional(lazy(() => orderUpdatedSchema))],
});
