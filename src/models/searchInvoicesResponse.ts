import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Invoice, invoiceSchema } from './invoice';

/** Describes a `SearchInvoices` response. */
export interface SearchInvoicesResponse {
  /** The list of invoices returned by the search. */
  invoices?: Invoice[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a
   * subsequent request to fetch the next set of invoices. If empty, this is the final
   * response.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const searchInvoicesResponseSchema: Schema<SearchInvoicesResponse> = object(
  {
    invoices: ['invoices', optional(array(lazy(() => invoiceSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
