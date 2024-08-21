import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
} from '../schema';
import {
  CatalogItemFoodAndBeverageDetailsDietaryPreference,
  catalogItemFoodAndBeverageDetailsDietaryPreferenceSchema,
} from './catalogItemFoodAndBeverageDetailsDietaryPreference';
import {
  CatalogItemFoodAndBeverageDetailsIngredient,
  catalogItemFoodAndBeverageDetailsIngredientSchema,
} from './catalogItemFoodAndBeverageDetailsIngredient';

/** The food and beverage-specific details of a `FOOD_AND_BEV` item. */
export interface CatalogItemFoodAndBeverageDetails {
  /** The calorie count (in the unit of kcal) for the `FOOD_AND_BEV` type of items. */
  calorieCount?: number | null;
  /** The dietary preferences for the `FOOD_AND_BEV` item. */
  dietaryPreferences?:
    | CatalogItemFoodAndBeverageDetailsDietaryPreference[]
    | null;
  /** The ingredients for the `FOOD_AND_BEV` type item. */
  ingredients?: CatalogItemFoodAndBeverageDetailsIngredient[] | null;
}

export const catalogItemFoodAndBeverageDetailsSchema: Schema<CatalogItemFoodAndBeverageDetails> = object(
  {
    calorieCount: ['calorie_count', optional(nullable(number()))],
    dietaryPreferences: [
      'dietary_preferences',
      optional(
        nullable(
          array(
            lazy(() => catalogItemFoodAndBeverageDetailsDietaryPreferenceSchema)
          )
        )
      ),
    ],
    ingredients: [
      'ingredients',
      optional(
        nullable(
          array(lazy(() => catalogItemFoodAndBeverageDetailsIngredientSchema))
        )
      ),
    ],
  }
);
