import { array, lazy, object, optional, Schema } from '../schema';
import { Checkout, checkoutSchema } from './checkout';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the `CreateCheckout` endpoint.
 */
export interface CreateCheckoutResponse {
  /**
   * Square Checkout lets merchants accept online payments for supported
   * payment types using a checkout workflow hosted on squareup.com.
   */
  checkout?: Checkout;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const createCheckoutResponseSchema: Schema<CreateCheckoutResponse> = object(
  {
    checkout: ['checkout', optional(lazy(() => checkoutSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
