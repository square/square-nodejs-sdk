import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

export interface CashDrawerShiftEvent {
  /** The unique ID of the event. */
  id?: string;
  /** The ID of the employee that created the event. */
  employeeId?: string;
  /**
   * The types of events on a CashDrawerShift.
   * Each event type represents an employee action on the actual cash drawer
   * represented by a CashDrawerShift.
   */
  eventType?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  eventMoney?: Money;
  /** The event time in ISO 8601 format. */
  createdAt?: string;
  /**
   * An optional description of the event, entered by the employee that
   * created the event.
   */
  description?: string;
}

export const cashDrawerShiftEventSchema: Schema<CashDrawerShiftEvent> = object({
  id: ['id', optional(string())],
  employeeId: ['employee_id', optional(string())],
  eventType: ['event_type', optional(string())],
  eventMoney: ['event_money', optional(lazy(() => moneySchema))],
  createdAt: ['created_at', optional(string())],
  description: ['description', optional(string())],
});
