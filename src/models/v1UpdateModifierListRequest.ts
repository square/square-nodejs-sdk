import { object, optional, Schema, string } from '../schema';

/** V1UpdateModifierListRequest */
export interface V1UpdateModifierListRequest {
  /** The modifier list's name. */
  name?: string;
  selectionType?: string;
}

export const v1UpdateModifierListRequestSchema: Schema<V1UpdateModifierListRequest> = object(
  {
    name: ['name', optional(string())],
    selectionType: ['selection_type', optional(string())],
  }
);
