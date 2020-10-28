import { lazy, object, Schema } from '../schema';
import { V1ModifierOption, v1ModifierOptionSchema } from './v1ModifierOption';

export interface V1UpdateModifierOptionRequest {
  /** V1ModifierOption */
  body: V1ModifierOption;
}

export const v1UpdateModifierOptionRequestSchema: Schema<V1UpdateModifierOptionRequest> = object(
  { body: ['body', lazy(() => v1ModifierOptionSchema)] }
);
