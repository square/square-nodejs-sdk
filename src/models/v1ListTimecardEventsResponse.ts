import { array, lazy, object, optional, Schema } from '../schema';
import { V1TimecardEvent, v1TimecardEventSchema } from './v1TimecardEvent';

export interface V1ListTimecardEventsResponse {
  items?: V1TimecardEvent[];
}

export const v1ListTimecardEventsResponseSchema: Schema<V1ListTimecardEventsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1TimecardEventSchema)))] }
);
