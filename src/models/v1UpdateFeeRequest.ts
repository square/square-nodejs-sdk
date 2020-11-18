import { lazy, object, Schema } from '../schema';
import { V1Fee, v1FeeSchema } from './v1Fee';

export interface V1UpdateFeeRequest {
  /** V1Fee */
  body: V1Fee;
}

export const v1UpdateFeeRequestSchema: Schema<V1UpdateFeeRequest> = object({
  body: ['body', lazy(() => v1FeeSchema)],
});
