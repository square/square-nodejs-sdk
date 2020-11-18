import { number, object, optional, Schema, string } from '../schema';

export interface V1ListSettlementsRequest {
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  order?: string;
  /** The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year. */
  beginTime?: string;
  /** The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time. */
  endTime?: string;
  /** The maximum number of settlements to return in a single response. This value cannot exceed 200. */
  limit?: number;
  status?: string;
  /**
   * A pagination cursor to retrieve the next set of results for your
   * original query to the endpoint.
   */
  batchToken?: string;
}

export const v1ListSettlementsRequestSchema: Schema<V1ListSettlementsRequest> = object(
  {
    order: ['order', optional(string())],
    beginTime: ['begin_time', optional(string())],
    endTime: ['end_time', optional(string())],
    limit: ['limit', optional(number())],
    status: ['status', optional(string())],
    batchToken: ['batch_token', optional(string())],
  }
);
