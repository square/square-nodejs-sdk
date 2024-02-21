import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { PaymentLink, paymentLinkSchema } from './paymentLink';

export interface ListPaymentLinksResponse {
  /** Errors that occurred during the request. */
  errors?: Error[];
  /** The list of payment links. */
  paymentLinks?: PaymentLink[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a subsequent request
   * to retrieve the next set of gift cards. If a cursor is not present, this is the final response.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const listPaymentLinksResponseSchema: Schema<ListPaymentLinksResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    paymentLinks: [
      'payment_links',
      optional(array(lazy(() => paymentLinkSchema))),
    ],
    cursor: ['cursor', optional(string())],
  }
);
