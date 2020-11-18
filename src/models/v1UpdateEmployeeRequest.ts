import { lazy, object, Schema } from '../schema';
import { V1Employee, v1EmployeeSchema } from './v1Employee';

export interface V1UpdateEmployeeRequest {
  /** Represents one of a business's employees. */
  body: V1Employee;
}

export const v1UpdateEmployeeRequestSchema: Schema<V1UpdateEmployeeRequest> = object(
  { body: ['body', lazy(() => v1EmployeeSchema)] }
);
