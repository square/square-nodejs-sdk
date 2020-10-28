import { lazy, object, Schema } from '../schema';
import { V1Variation, v1VariationSchema } from './v1Variation';

export interface V1UpdateVariationRequest {
  /** V1Variation */
  body: V1Variation;
}

export const v1UpdateVariationRequestSchema: Schema<V1UpdateVariationRequest> = object(
  { body: ['body', lazy(() => v1VariationSchema)] }
);
