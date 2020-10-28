import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Describes a `DeleteInvoice` response. */
export interface DeleteInvoiceResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const deleteInvoiceResponseSchema: Schema<DeleteInvoiceResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
