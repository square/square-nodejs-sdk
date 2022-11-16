import { array, lazy, nullable, object, optional, Schema } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';
import { Order, orderSchema } from './order';

export interface PaymentLinkRelatedResources {
  /** The order associated with the payment link. */
  orders?: Order[] | null;
  /** The subscription plan associated with the payment link. */
  subscriptionPlans?: CatalogObject[] | null;
}

export const paymentLinkRelatedResourcesSchema: Schema<PaymentLinkRelatedResources> = object(
  {
    orders: ['orders', optional(nullable(array(lazy(() => orderSchema))))],
    subscriptionPlans: [
      'subscription_plans',
      optional(nullable(array(lazy(() => catalogObjectSchema)))),
    ],
  }
);
