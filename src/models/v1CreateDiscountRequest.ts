import { lazy, object, optional, Schema } from '../schema';
import { V1Discount, v1DiscountSchema } from './v1Discount';

export interface V1CreateDiscountRequest {
  /** V1Discount */
  body?: V1Discount;
}

export const v1CreateDiscountRequestSchema: Schema<V1CreateDiscountRequest> = object(
  { body: ['body', optional(lazy(() => v1DiscountSchema))] }
);
