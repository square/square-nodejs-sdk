import { lazy, object, optional, Schema, string } from '../schema';
import { Shift, shiftSchema } from './shift';

/** Represents a request to create a `Shift`. */
export interface CreateShiftRequest {
  /** A unique string value to ensure the idempotency of the operation. */
  idempotencyKey?: string;
  /**
   * A record of the hourly rate, start, and end times for a single work shift
   * for an employee. This might include a record of the start and end times for breaks
   * taken during the shift.
   */
  shift: Shift;
}

export const createShiftRequestSchema: Schema<CreateShiftRequest> = object({
  idempotencyKey: ['idempotency_key', optional(string())],
  shift: ['shift', lazy(() => shiftSchema)],
});
