import { array, lazy, object, optional, Schema } from '../schema';
import { V1Timecard, v1TimecardSchema } from './v1Timecard';

export interface V1ListTimecardsResponse {
  items?: V1Timecard[];
}

export const v1ListTimecardsResponseSchema: Schema<V1ListTimecardsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1TimecardSchema)))] }
);
