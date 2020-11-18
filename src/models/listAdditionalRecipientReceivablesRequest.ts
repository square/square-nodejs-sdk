import { object, optional, Schema, string } from '../schema';

/**
 * Defines the query parameters that can be included in
 * a request to the [ListAdditionalRecipientReceivables](#endpoint-listadditionalrecipientreceivables) endpoint.
 */
export interface ListAdditionalRecipientReceivablesRequest {
  /**
   * The beginning of the requested reporting period, in RFC 3339 format.
   * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
   * Default value: The current time minus one year.
   */
  beginTime?: string;
  /**
   * The end of the requested reporting period, in RFC 3339 format.
   * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
   * Default value: The current time.
   */
  endTime?: string;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for your original query.
   * See [Paginating results](#paginatingresults) for more information.
   */
  cursor?: string;
}

export const listAdditionalRecipientReceivablesRequestSchema: Schema<ListAdditionalRecipientReceivablesRequest> = object(
  {
    beginTime: ['begin_time', optional(string())],
    endTime: ['end_time', optional(string())],
    sortOrder: ['sort_order', optional(string())],
    cursor: ['cursor', optional(string())],
  }
);
