import { nullable, object, optional, Schema, string } from '../schema';

/** Describes the ingredient used in a `FOOD_AND_BEV` item. */
export interface CatalogItemFoodAndBeverageDetailsIngredient {
  /** The type of dietary preference for the `FOOD_AND_BEV` type of items and integredients. */
  type?: string;
  /** Standard ingredients for food and beverage items that are recommended on item creation. */
  standardName?: string;
  /** The name of a custom user-defined ingredient. This should be null if it's a standard dietary preference. */
  customName?: string | null;
}

export const catalogItemFoodAndBeverageDetailsIngredientSchema: Schema<CatalogItemFoodAndBeverageDetailsIngredient> = object(
  {
    type: ['type', optional(string())],
    standardName: ['standard_name', optional(string())],
    customName: ['custom_name', optional(nullable(string()))],
  }
);
