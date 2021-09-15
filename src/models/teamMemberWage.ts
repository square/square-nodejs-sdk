import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * The hourly wage rate that a team member will earn on a `Shift` for doing the job
 * specified by the `title` property of this object.
 */
export interface TeamMemberWage {
  /** UUID for this object. */
  id?: string;
  /** The `Team Member` that this wage is assigned to. */
  teamMemberId?: string;
  /** The job title that this wage relates to. */
  title?: string;
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

export const teamMemberWageSchema: Schema<TeamMemberWage> = object({
  id: ['id', optional(string())],
  teamMemberId: ['team_member_id', optional(string())],
  title: ['title', optional(string())],
  hourlyRate: ['hourly_rate', optional(lazy(() => moneySchema))],
});
