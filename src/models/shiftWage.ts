import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** The hourly wage rate used to compensate an employee for this shift. */
export interface ShiftWage {
  /**
   * The name of the job performed during this shift. Square
   * labor-reporting UIs might group shifts together by title.
   */
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

export const shiftWageSchema: Schema<ShiftWage> = object({
  title: ['title', optional(nullable(string()))],
  hourlyRate: ['hourly_rate', optional(lazy(() => moneySchema))],
});
