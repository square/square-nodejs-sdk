import { array, lazy, object, optional, Schema } from '../schema';
import { Employee, employeeSchema } from './employee';
import { Error, errorSchema } from './error';

export interface RetrieveEmployeeResponse {
  /**
   * An employee object that is used by the external API.
   * DEPRECATED at version 2020-08-26. Replaced by [TeamMember](entity:TeamMember).
   */
  employee?: Employee;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const retrieveEmployeeResponseSchema: Schema<RetrieveEmployeeResponse> = object(
  {
    employee: ['employee', optional(lazy(() => employeeSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
