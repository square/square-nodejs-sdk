import { lazy, object, Schema } from '../schema';
import { V1EmployeeRole, v1EmployeeRoleSchema } from './v1EmployeeRole';

export interface V1UpdateEmployeeRoleRequest {
  /** V1EmployeeRole */
  body: V1EmployeeRole;
}

export const v1UpdateEmployeeRoleRequestSchema: Schema<V1UpdateEmployeeRoleRequest> = object(
  { body: ['body', lazy(() => v1EmployeeRoleSchema)] }
);
