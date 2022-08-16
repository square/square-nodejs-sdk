import { array, lazy, object, optional, Schema } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';
import { Order, orderSchema } from './order';

export interface PaymentLinkRelatedResources {
  /** The order associated with the payment link. */
  orders?: Order[];
  /** The subscription plan associated with the payment link. */
  subscriptionPlans?: CatalogObject[];
}

export const paymentLinkRelatedResourcesSchema: Schema<PaymentLinkRelatedResources> = object(
  {
    orders: ['orders', optional(array(lazy(() => orderSchema)))],
    subscriptionPlans: [
      'subscription_plans',
      optional(array(lazy(() => catalogObjectSchema))),
    ],
  }
);
