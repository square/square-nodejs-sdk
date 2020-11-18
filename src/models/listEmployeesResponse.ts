import { array, lazy, object, optional, Schema, string } from '../schema';
import { Employee, employeeSchema } from './employee';
import { Error, errorSchema } from './error';

export interface ListEmployeesResponse {
  employees?: Employee[];
  /** The token to be used to retrieve the next page of results. */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const listEmployeesResponseSchema: Schema<ListEmployeesResponse> = object(
  {
    employees: ['employees', optional(array(lazy(() => employeeSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
