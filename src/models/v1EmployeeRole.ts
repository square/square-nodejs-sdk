import { array, boolean, object, optional, Schema, string } from '../schema';

/** V1EmployeeRole */
export interface V1EmployeeRole {
  /** The role's unique ID, Can only be set by Square. */
  id?: string;
  /** The role's merchant-defined name. */
  name: string;
  /**
   * The role's permissions.
   * See [V1EmployeeRolePermissions](#type-v1employeerolepermissions) for possible values
   */
  permissions: string[];
  /** If true, employees with this role have all permissions, regardless of the values indicated in permissions. */
  isOwner?: boolean;
  /** The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created. */
  createdAt?: string;
  /** The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role updated. */
  updatedAt?: string;
}

export const v1EmployeeRoleSchema: Schema<V1EmployeeRole> = object({
  id: ['id', optional(string())],
  name: ['name', string()],
  permissions: ['permissions', array(string())],
  isOwner: ['is_owner', optional(boolean())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
