import { array, lazy, object, optional, Schema, string } from '../schema';
import { EmployeeWage, employeeWageSchema } from './employeeWage';
import { Error, errorSchema } from './error';

/**
 * The response to a request for a set of `EmployeeWage` objects. The response contains
 * a set of `EmployeeWage` objects.
 */
export interface ListEmployeeWagesResponse {
  /** A page of `EmployeeWage` results. */
  employeeWages?: EmployeeWage[];
  /**
   * The value supplied in the subsequent request to fetch the next page
   * of `EmployeeWage` results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const listEmployeeWagesResponseSchema: Schema<ListEmployeeWagesResponse> = object(
  {
    employeeWages: [
      'employee_wages',
      optional(array(lazy(() => employeeWageSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
