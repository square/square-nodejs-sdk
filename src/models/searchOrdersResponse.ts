import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Order, orderSchema } from './order';
import { OrderEntry, orderEntrySchema } from './orderEntry';

/**
 * Only one of `order_entries` or `orders` fields will be set, depending on whether
 * `return_entries` was set on the [SearchOrdersRequest](#type-searchorderrequest).
 */
export interface SearchOrdersResponse {
  /**
   * List of [OrderEntries](#type-orderentry) that fit the query
   * conditions. Populated only if `return_entries` was set to `true` in the request.
   */
  orderEntries?: OrderEntry[];
  /**
   * List of
   * [Order](#type-order) objects that match query conditions. Populated only if
   * `return_entries` in the request is set to `false`.
   */
  orders?: Order[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset,
   * this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  cursor?: string;
  /** [Errors](#type-error) encountered during the search. */
  errors?: Error[];
}

export const searchOrdersResponseSchema: Schema<SearchOrdersResponse> = object({
  orderEntries: [
    'order_entries',
    optional(array(lazy(() => orderEntrySchema))),
  ],
  orders: ['orders', optional(array(lazy(() => orderSchema)))],
  cursor: ['cursor', optional(string())],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
