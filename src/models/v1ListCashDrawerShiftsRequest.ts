import { object, optional, Schema, string } from '../schema';

export interface V1ListCashDrawerShiftsRequest {
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  order?: string;
  /** The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days. */
  beginTime?: string;
  /** The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time. */
  endTime?: string;
}

export const v1ListCashDrawerShiftsRequestSchema: Schema<V1ListCashDrawerShiftsRequest> = object(
  {
    order: ['order', optional(string())],
    beginTime: ['begin_time', optional(string())],
    endTime: ['end_time', optional(string())],
  }
);
