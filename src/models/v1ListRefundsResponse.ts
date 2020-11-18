import { array, lazy, object, optional, Schema } from '../schema';
import { V1Refund, v1RefundSchema } from './v1Refund';

export interface V1ListRefundsResponse {
  items?: V1Refund[];
}

export const v1ListRefundsResponseSchema: Schema<V1ListRefundsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1RefundSchema)))] }
);
