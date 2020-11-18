import { array, lazy, object, optional, Schema, string } from '../schema';
import { V1ModifierOption, v1ModifierOptionSchema } from './v1ModifierOption';

/** V1ModifierList */
export interface V1ModifierList {
  /** The modifier list's unique ID. */
  id?: string;
  /** The modifier list's name. */
  name?: string;
  selectionType?: string;
  /** The options included in the modifier list. */
  modifierOptions?: V1ModifierOption[];
  /** The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. */
  v2Id?: string;
}

export const v1ModifierListSchema: Schema<V1ModifierList> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  selectionType: ['selection_type', optional(string())],
  modifierOptions: [
    'modifier_options',
    optional(array(lazy(() => v1ModifierOptionSchema))),
  ],
  v2Id: ['v2_id', optional(string())],
});
