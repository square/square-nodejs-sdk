import { array, lazy, object, optional, Schema } from '../schema';
import { V1ModifierList, v1ModifierListSchema } from './v1ModifierList';

export interface V1ListModifierListsResponse {
  items?: V1ModifierList[];
}

export const v1ListModifierListsResponseSchema: Schema<V1ListModifierListsResponse> = object(
  { items: ['items', optional(array(lazy(() => v1ModifierListSchema)))] }
);
