import { number, object, optional, Schema, string } from '../schema';

/** A request for a set of `EmployeeWage` objects. */
export interface ListEmployeeWagesRequest {
  /** Filter the returned wages to only those that are associated with the specified employee. */
  employeeId?: string;
  /**
   * The maximum number of `EmployeeWage` results to return per page. The number can range between
   * 1 and 200. The default is 200.
   */
  limit?: number;
  /** A pointer to the next page of `EmployeeWage` results to fetch. */
  cursor?: string;
}

export const listEmployeeWagesRequestSchema: Schema<ListEmployeeWagesRequest> = object(
  {
    employeeId: ['employee_id', optional(string())],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
