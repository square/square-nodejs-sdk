import { array, object, optional, Schema, string } from '../schema';

/** Represents one of a business's employees. */
export interface V1Employee {
  /** The employee's unique ID. */
  id?: string;
  /** The employee's first name. */
  firstName: string;
  /** The employee's last name. */
  lastName: string;
  /** The ids of the employee's associated roles. Currently, you can specify only one or zero roles per employee. */
  roleIds?: string[];
  /** The IDs of the locations the employee is allowed to clock in at. */
  authorizedLocationIds?: string[];
  /** The employee's email address. */
  email?: string;
  status?: string;
  /** An ID the merchant can set to associate the employee with an entity in another system. */
  externalId?: string;
  /** The time when the employee entity was created, in ISO 8601 format. */
  createdAt?: string;
  /** The time when the employee entity was most recently updated, in ISO 8601 format. */
  updatedAt?: string;
}

export const v1EmployeeSchema: Schema<V1Employee> = object({
  id: ['id', optional(string())],
  firstName: ['first_name', string()],
  lastName: ['last_name', string()],
  roleIds: ['role_ids', optional(array(string()))],
  authorizedLocationIds: ['authorized_location_ids', optional(array(string()))],
  email: ['email', optional(string())],
  status: ['status', optional(string())],
  externalId: ['external_id', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
