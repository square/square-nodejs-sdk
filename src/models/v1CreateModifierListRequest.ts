import { lazy, object, optional, Schema } from '../schema';
import { V1ModifierList, v1ModifierListSchema } from './v1ModifierList';

export interface V1CreateModifierListRequest {
  /** V1ModifierList */
  body?: V1ModifierList;
}

export const v1CreateModifierListRequestSchema: Schema<V1CreateModifierListRequest> = object(
  { body: ['body', optional(lazy(() => v1ModifierListSchema))] }
);
