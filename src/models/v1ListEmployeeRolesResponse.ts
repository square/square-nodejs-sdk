import { array, lazy, object, optional, Schema } from '../schema';
import { V1EmployeeRole, v1EmployeeRoleSchema } from './v1EmployeeRole';

export interface V1ListEmployeeRolesResponse {
  items?: V1EmployeeRole[];
}

export const v1ListEmployeeRolesResponseSchema: Schema<V1ListEmployeeRolesResponse> = object(
  { items: ['items', optional(array(lazy(() => v1EmployeeRoleSchema)))] }
);
