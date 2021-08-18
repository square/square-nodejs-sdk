import { lazy, object, optional, Schema, string } from '../schema';
import { BreakType, breakTypeSchema } from './breakType';

/** A request to create a new `BreakType`. */
export interface CreateBreakTypeRequest {
  /** A unique string value to ensure the idempotency of the operation. */
  idempotencyKey?: string;
  /**
   * A defined break template that sets an expectation for possible `Break`
   * instances on a `Shift`.
   */
  breakType: BreakType;
}

export const createBreakTypeRequestSchema: Schema<CreateBreakTypeRequest> = object(
  {
    idempotencyKey: ['idempotency_key', optional(string())],
    breakType: ['break_type', lazy(() => breakTypeSchema)],
  }
);
