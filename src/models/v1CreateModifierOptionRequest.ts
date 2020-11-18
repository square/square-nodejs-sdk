import { lazy, object, optional, Schema } from '../schema';
import { V1ModifierOption, v1ModifierOptionSchema } from './v1ModifierOption';

export interface V1CreateModifierOptionRequest {
  /** V1ModifierOption */
  body?: V1ModifierOption;
}

export const v1CreateModifierOptionRequestSchema: Schema<V1CreateModifierOptionRequest> = object(
  { body: ['body', optional(lazy(() => v1ModifierOptionSchema))] }
);
