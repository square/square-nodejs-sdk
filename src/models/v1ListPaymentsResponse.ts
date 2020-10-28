import { array, lazy, object, optional, Schema } from '../schema';
import { V1Payment, v1PaymentSchema } from './v1Payment';

export interface V1ListPaymentsResponse {
  items?: V1Payment[];
}

export const v1ListPaymentsResponseSchema: Schema<V1ListPaymentsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1PaymentSchema)))] }
);
