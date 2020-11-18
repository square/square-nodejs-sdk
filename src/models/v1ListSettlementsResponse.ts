import { array, lazy, object, optional, Schema } from '../schema';
import { V1Settlement, v1SettlementSchema } from './v1Settlement';

export interface V1ListSettlementsResponse {
  items?: V1Settlement[];
}

export const v1ListSettlementsResponseSchema: Schema<V1ListSettlementsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1SettlementSchema)))] }
);
