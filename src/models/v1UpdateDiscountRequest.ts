import { lazy, object, Schema } from '../schema';
import { V1Discount, v1DiscountSchema } from './v1Discount';

export interface V1UpdateDiscountRequest {
  /** V1Discount */
  body: V1Discount;
}

export const v1UpdateDiscountRequestSchema: Schema<V1UpdateDiscountRequest> = object(
  { body: ['body', lazy(() => v1DiscountSchema)] }
);
