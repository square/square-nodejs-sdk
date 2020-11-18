import { lazy, object, optional, Schema } from '../schema';
import { V1Variation, v1VariationSchema } from './v1Variation';

export interface V1CreateVariationRequest {
  /** V1Variation */
  body?: V1Variation;
}

export const v1CreateVariationRequestSchema: Schema<V1CreateVariationRequest> = object(
  { body: ['body', optional(lazy(() => v1VariationSchema))] }
);
