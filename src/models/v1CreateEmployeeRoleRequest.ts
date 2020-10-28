import { lazy, object, optional, Schema } from '../schema';
import { V1EmployeeRole, v1EmployeeRoleSchema } from './v1EmployeeRole';

export interface V1CreateEmployeeRoleRequest {
  /** V1EmployeeRole */
  employeeRole?: V1EmployeeRole;
}

export const v1CreateEmployeeRoleRequestSchema: Schema<V1CreateEmployeeRoleRequest> = object(
  {
    employeeRole: ['employee_role', optional(lazy(() => v1EmployeeRoleSchema))],
  }
);
