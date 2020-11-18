import { array, lazy, object, optional, Schema } from '../schema';
import { V1Employee, v1EmployeeSchema } from './v1Employee';

export interface V1ListEmployeesResponse {
  items?: V1Employee[];
}

export const v1ListEmployeesResponseSchema: Schema<V1ListEmployeesResponse> = object(
  { items: ['items', optional(array(lazy(() => v1EmployeeSchema)))] }
);
