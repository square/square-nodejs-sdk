import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  AdditionalRecipientReceivable,
  additionalRecipientReceivableSchema,
} from './additionalRecipientReceivable';
import { Error, errorSchema } from './error';

/**
 * Defines the fields that are included in the response body of
 * a request to the [ListAdditionalRecipientReceivables](#endpoint-listadditionalrecipientreceivables) endpoint.
 * One of `errors` or `additional_recipient_receivables` is present in a given response (never both).
 */
export interface ListAdditionalRecipientReceivablesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** An array of AdditionalRecipientReceivables that match your query. */
  receivables?: AdditionalRecipientReceivable[];
  /**
   * A pagination cursor for retrieving the next set of results,
   * if any remain. Provide this value as the `cursor` parameter in a subsequent
   * request to this endpoint.
   * See [Paginating results](#paginatingresults) for more information.
   */
  cursor?: string;
}

export const listAdditionalRecipientReceivablesResponseSchema: Schema<ListAdditionalRecipientReceivablesResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    receivables: [
      'receivables',
      optional(array(lazy(() => additionalRecipientReceivableSchema))),
    ],
    cursor: ['cursor', optional(string())],
  }
);
