import {
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V1Money, v1MoneySchema } from './v1Money';

/** V1ModifierOption */
export interface V1ModifierOption {
  /** The modifier option's unique ID. */
  id?: string;
  /** The modifier option's name. */
  name?: string;
  priceMoney?: V1Money;
  /** If true, the modifier option is the default option in a modifier list for which selection_type is SINGLE. */
  onByDefault?: boolean;
  /** Indicates the modifier option's list position when displayed in Square Point of Sale and the merchant dashboard. If more than one modifier option in the same modifier list has the same ordinal value, those options are displayed in alphabetical order. */
  ordinal?: number;
  /** The ID of the modifier list the option belongs to. */
  modifierListId?: string;
  /** The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. */
  v2Id?: string;
}

export const v1ModifierOptionSchema: Schema<V1ModifierOption> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  priceMoney: ['price_money', optional(lazy(() => v1MoneySchema))],
  onByDefault: ['on_by_default', optional(boolean())],
  ordinal: ['ordinal', optional(number())],
  modifierListId: ['modifier_list_id', optional(string())],
  v2Id: ['v2_id', optional(string())],
});
