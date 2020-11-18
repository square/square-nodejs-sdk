import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CatalogModifierOverride,
  catalogModifierOverrideSchema,
} from './catalogModifierOverride';

/** Options to control the properties of a `CatalogModifierList` applied to a `CatalogItem` instance. */
export interface CatalogItemModifierListInfo {
  /** The ID of the `CatalogModifierList` controlled by this `CatalogModifierListInfo`. */
  modifierListId: string;
  /** A set of `CatalogModifierOverride` objects that override whether a given `CatalogModifier` is enabled by default. */
  modifierOverrides?: CatalogModifierOverride[];
  /** If 0 or larger, the smallest number of `CatalogModifier`s that must be selected from this `CatalogModifierList`. */
  minSelectedModifiers?: number;
  /** If 0 or larger, the largest number of `CatalogModifier`s that can be selected from this `CatalogModifierList`. */
  maxSelectedModifiers?: number;
  /** If `true`, enable this `CatalogModifierList`. The default value is `true`. */
  enabled?: boolean;
}

export const catalogItemModifierListInfoSchema: Schema<CatalogItemModifierListInfo> = object(
  {
    modifierListId: ['modifier_list_id', string()],
    modifierOverrides: [
      'modifier_overrides',
      optional(array(lazy(() => catalogModifierOverrideSchema))),
    ],
    minSelectedModifiers: ['min_selected_modifiers', optional(number())],
    maxSelectedModifiers: ['max_selected_modifiers', optional(number())],
    enabled: ['enabled', optional(boolean())],
  }
);
