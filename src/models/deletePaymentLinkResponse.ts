import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

export interface DeletePaymentLinkResponse {
  errors?: Error[];
  /** The ID of the link that is deleted. */
  id?: string;
  /**
   * The ID of the order that is canceled. When a payment link is deleted, Square updates the
   * the `state` (of the order that the checkout link created) to CANCELED.
   */
  cancelledOrderId?: string;
}

export const deletePaymentLinkResponseSchema: Schema<DeletePaymentLinkResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    id: ['id', optional(string())],
    cancelledOrderId: ['cancelled_order_id', optional(string())],
  }
);
