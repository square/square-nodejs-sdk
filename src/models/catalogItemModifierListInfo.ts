import {
  array,
  boolean,
  lazy,
  nullable,
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

/**
 * References a text-based modifier or a list of non text-based modifiers applied to a `CatalogItem` instance
 * and specifies supported behaviors of the application.
 */
export interface CatalogItemModifierListInfo {
  /** The ID of the `CatalogModifierList` controlled by this `CatalogModifierListInfo`. */
  modifierListId: string;
  /** A set of `CatalogModifierOverride` objects that override whether a given `CatalogModifier` is enabled by default. */
  modifierOverrides?: CatalogModifierOverride[] | null;
  /**
   * If 0 or larger, the smallest number of `CatalogModifier`s that must be selected from this `CatalogModifierList`.
   * The default value is `-1`.
   * When  `CatalogModifierList.selection_type` is `MULTIPLE`, `CatalogModifierListInfo.min_selected_modifiers=-1`
   * and `CatalogModifierListInfo.max_selected_modifier=-1` means that from zero to the maximum number of modifiers of
   * the `CatalogModifierList` can be selected from the `CatalogModifierList`.
   * When the `CatalogModifierList.selection_type` is `SINGLE`, `CatalogModifierListInfo.min_selected_modifiers=-1`
   * and `CatalogModifierListInfo.max_selected_modifier=-1` means that exactly one modifier must be present in
   * and can be selected from the `CatalogModifierList`
   */
  minSelectedModifiers?: number | null;
  /**
   * If 0 or larger, the largest number of `CatalogModifier`s that can be selected from this `CatalogModifierList`.
   * The default value is `-1`.
   * When  `CatalogModifierList.selection_type` is `MULTIPLE`, `CatalogModifierListInfo.min_selected_modifiers=-1`
   * and `CatalogModifierListInfo.max_selected_modifier=-1` means that from zero to the maximum number of modifiers of
   * the `CatalogModifierList` can be selected from the `CatalogModifierList`.
   * When the `CatalogModifierList.selection_type` is `SINGLE`, `CatalogModifierListInfo.min_selected_modifiers=-1`
   * and `CatalogModifierListInfo.max_selected_modifier=-1` means that exactly one modifier must be present in
   * and can be selected from the `CatalogModifierList`
   */
  maxSelectedModifiers?: number | null;
  /** If `true`, enable this `CatalogModifierList`. The default value is `true`. */
  enabled?: boolean | null;
  /**
   * The position of this `CatalogItemModifierListInfo` object within the `modifier_list_info` list applied
   * to a `CatalogItem` instance.
   */
  ordinal?: number | null;
}

export const catalogItemModifierListInfoSchema: Schema<CatalogItemModifierListInfo> = object(
  {
    modifierListId: ['modifier_list_id', string()],
    modifierOverrides: [
      'modifier_overrides',
      optional(nullable(array(lazy(() => catalogModifierOverrideSchema)))),
    ],
    minSelectedModifiers: [
      'min_selected_modifiers',
      optional(nullable(number())),
    ],
    maxSelectedModifiers: [
      'max_selected_modifiers',
      optional(nullable(number())),
    ],
    enabled: ['enabled', optional(nullable(boolean()))],
    ordinal: ['ordinal', optional(nullable(number()))],
  }
);
