import { nullable, number, object, optional, Schema, string } from '../schema';

export interface V1ListRefundsRequest {
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  order?: string;
  /** The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year. */
  beginTime?: string | null;
  /** The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time. */
  endTime?: string | null;
  /** The approximate number of refunds to return in a single response. Default: 100. Max: 200. Response may contain more results than the prescribed limit when refunds are made simultaneously to multiple tenders in a payment or when refunds are generated in an exchange to account for the value of returned goods. */
  limit?: number | null;
  /**
   * A pagination cursor to retrieve the next set of results for your
   * original query to the endpoint.
   */
  batchToken?: string | null;
}

export const v1ListRefundsRequestSchema: Schema<V1ListRefundsRequest> = object({
  order: ['order', optional(string())],
  beginTime: ['begin_time', optional(nullable(string()))],
  endTime: ['end_time', optional(nullable(string()))],
  limit: ['limit', optional(nullable(number()))],
  batchToken: ['batch_token', optional(nullable(string()))],
});
