import { number, object, optional, Schema, string } from '../schema';

export interface V1ListEmployeesRequest {
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  order?: string;
  /** If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format */
  beginUpdatedAt?: string;
  /** If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format. */
  endUpdatedAt?: string;
  /** If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format. */
  beginCreatedAt?: string;
  /** If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format. */
  endCreatedAt?: string;
  status?: string;
  /** If provided, the endpoint returns only employee entities with the specified external_id. */
  externalId?: string;
  /** The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. */
  limit?: number;
  /**
   * A pagination cursor to retrieve the next set of results for your
   * original query to the endpoint.
   */
  batchToken?: string;
}

export const v1ListEmployeesRequestSchema: Schema<V1ListEmployeesRequest> = object(
  {
    order: ['order', optional(string())],
    beginUpdatedAt: ['begin_updated_at', optional(string())],
    endUpdatedAt: ['end_updated_at', optional(string())],
    beginCreatedAt: ['begin_created_at', optional(string())],
    endCreatedAt: ['end_created_at', optional(string())],
    status: ['status', optional(string())],
    externalId: ['external_id', optional(string())],
    limit: ['limit', optional(number())],
    batchToken: ['batch_token', optional(string())],
  }
);
