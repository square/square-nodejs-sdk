import { boolean, object, optional, Schema, string } from '../schema';

/** Options to control how to override the default behavior of the specified modifier. */
export interface CatalogModifierOverride {
  /** The ID of the `CatalogModifier` whose default behavior is being overridden. */
  modifierId: string;
  /** If `true`, this `CatalogModifier` should be selected by default for this `CatalogItem`. */
  onByDefault?: boolean;
}

export const catalogModifierOverrideSchema: Schema<CatalogModifierOverride> = object(
  {
    modifierId: ['modifier_id', string()],
    onByDefault: ['on_by_default', optional(boolean())],
  }
);
