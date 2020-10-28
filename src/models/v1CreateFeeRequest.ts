import { lazy, object, optional, Schema } from '../schema';
import { V1Fee, v1FeeSchema } from './v1Fee';

export interface V1CreateFeeRequest {
  /** V1Fee */
  body?: V1Fee;
}

export const v1CreateFeeRequestSchema: Schema<V1CreateFeeRequest> = object({
  body: ['body', optional(lazy(() => v1FeeSchema))],
});
