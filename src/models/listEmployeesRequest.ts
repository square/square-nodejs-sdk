import { number, object, optional, Schema, string } from '../schema';

export interface ListEmployeesRequest {
  locationId?: string;
  /** The status of the Employee being retrieved. */
  status?: string;
  /** The number of employees to be returned on each page. */
  limit?: number;
  /** The token required to retrieve the specified page of results. */
  cursor?: string;
}

export const listEmployeesRequestSchema: Schema<ListEmployeesRequest> = object({
  locationId: ['location_id', optional(string())],
  status: ['status', optional(string())],
  limit: ['limit', optional(number())],
  cursor: ['cursor', optional(string())],
});
