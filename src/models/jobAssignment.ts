import {
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';

/** An object describing a job that a team member is assigned to. */
export interface JobAssignment {
  /** The title of the job. */
  jobTitle: string;
  /** Enumerates the possible pay types that a job can be assigned. */
  payType: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  hourlyRate?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  annualRate?: Money;
  /** The planned hours per week for the job. Set if the job `PayType` is `SALARY`. */
  weeklyHours?: number | null;
}

export const jobAssignmentSchema: Schema<JobAssignment> = object({
  jobTitle: ['job_title', string()],
  payType: ['pay_type', string()],
  hourlyRate: ['hourly_rate', optional(lazy(() => moneySchema))],
  annualRate: ['annual_rate', optional(lazy(() => moneySchema))],
  weeklyHours: ['weekly_hours', optional(nullable(number()))],
});
