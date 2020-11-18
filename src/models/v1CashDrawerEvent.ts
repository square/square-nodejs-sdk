import { lazy, object, optional, Schema, string } from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1CashDrawerEvent */
export interface V1CashDrawerEvent {
  /** The event's unique ID. */
  id?: string;
  /** The ID of the employee that created the event. */
  employeeId?: string;
  eventType?: string;
  eventMoney?: V1Money;
  /** The time when the event occurred, in ISO 8601 format. */
  createdAt?: string;
  /** An optional description of the event, entered by the employee that created it. */
  description?: string;
}

export const v1CashDrawerEventSchema: Schema<V1CashDrawerEvent> = object({
  id: ['id', optional(string())],
  employeeId: ['employee_id', optional(string())],
  eventType: ['event_type', optional(string())],
  eventMoney: ['event_money', optional(lazy(() => v1MoneySchema))],
  createdAt: ['created_at', optional(string())],
  description: ['description', optional(string())],
});
