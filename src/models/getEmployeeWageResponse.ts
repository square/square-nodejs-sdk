import { array, lazy, object, optional, Schema } from '../schema';
import { EmployeeWage, employeeWageSchema } from './employeeWage';
import { Error, errorSchema } from './error';

/**
 * A response to a request to get an `EmployeeWage`. The response contains
 * the requested `EmployeeWage` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface GetEmployeeWageResponse {
  /** The hourly wage rate that an employee earns on a `Shift` for doing the job specified by the `title` property of this object. Deprecated at version 2020-08-26. Use [TeamMemberWage](entity:TeamMemberWage). */
  employeeWage?: EmployeeWage;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const getEmployeeWageResponseSchema: Schema<GetEmployeeWageResponse> = object(
  {
    employeeWage: ['employee_wage', optional(lazy(() => employeeWageSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
