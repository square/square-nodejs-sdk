import { lazy, object, Schema } from '../schema';
import { V1Timecard, v1TimecardSchema } from './v1Timecard';

export interface V1UpdateTimecardRequest {
  /** Represents a timecard for an employee. */
  body: V1Timecard;
}

export const v1UpdateTimecardRequestSchema: Schema<V1UpdateTimecardRequest> = object(
  { body: ['body', lazy(() => v1TimecardSchema)] }
);
