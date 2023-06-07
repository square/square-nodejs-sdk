import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** The hourly wage rate that an employee earns on a `Shift` for doing the job specified by the `title` property of this object. Deprecated at version 2020-08-26. Use [TeamMemberWage](entity:TeamMemberWage). */
export interface EmployeeWage {
  /** The UUID for this object. */
  id?: string;
  /** The `Employee` that this wage is assigned to. */
  employeeId?: string | null;
  /** The job title that this wage relates to. */
  title?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  hourlyRate?: Money;
}

export const employeeWageSchema: Schema<EmployeeWage> = object({
  id: ['id', optional(string())],
  employeeId: ['employee_id', optional(nullable(string()))],
  title: ['title', optional(nullable(string()))],
  hourlyRate: ['hourly_rate', optional(lazy(() => moneySchema))],
});
