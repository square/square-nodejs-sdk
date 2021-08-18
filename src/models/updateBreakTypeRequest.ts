import { lazy, object, Schema } from '../schema';
import { BreakType, breakTypeSchema } from './breakType';

/** A request to update a `BreakType`. */
export interface UpdateBreakTypeRequest {
  /**
   * A defined break template that sets an expectation for possible `Break`
   * instances on a `Shift`.
   */
  breakType: BreakType;
}

export const updateBreakTypeRequestSchema: Schema<UpdateBreakTypeRequest> = object(
  { breakType: ['break_type', lazy(() => breakTypeSchema)] }
);
