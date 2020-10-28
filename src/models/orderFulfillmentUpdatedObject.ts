import { lazy, object, optional, Schema } from '../schema';
import {
  OrderFulfillmentUpdated,
  orderFulfillmentUpdatedSchema,
} from './orderFulfillmentUpdated';

export interface OrderFulfillmentUpdatedObject {
  orderFulfillmentUpdated?: OrderFulfillmentUpdated;
}

export const orderFulfillmentUpdatedObjectSchema: Schema<OrderFulfillmentUpdatedObject> = object(
  {
    orderFulfillmentUpdated: [
      'order_fulfillment_updated',
      optional(lazy(() => orderFulfillmentUpdatedSchema)),
    ],
  }
);
