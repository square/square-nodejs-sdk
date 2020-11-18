import { array, lazy, object, optional, Schema } from '../schema';
import { V1Discount, v1DiscountSchema } from './v1Discount';

export interface V1ListDiscountsResponse {
  items?: V1Discount[];
}

export const v1ListDiscountsResponseSchema: Schema<V1ListDiscountsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1DiscountSchema)))] }
);
