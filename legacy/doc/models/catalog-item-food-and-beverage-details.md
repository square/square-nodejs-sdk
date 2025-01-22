
# Catalog Item Food and Beverage Details

The food and beverage-specific details of a `FOOD_AND_BEV` item.

## Structure

`CatalogItemFoodAndBeverageDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `calorieCount` | `number \| null \| undefined` | Optional | The calorie count (in the unit of kcal) for the `FOOD_AND_BEV` type of items. |
| `dietaryPreferences` | [`CatalogItemFoodAndBeverageDetailsDietaryPreference[] \| null \| undefined`](../../doc/models/catalog-item-food-and-beverage-details-dietary-preference.md) | Optional | The dietary preferences for the `FOOD_AND_BEV` item. |
| `ingredients` | [`CatalogItemFoodAndBeverageDetailsIngredient[] \| null \| undefined`](../../doc/models/catalog-item-food-and-beverage-details-ingredient.md) | Optional | The ingredients for the `FOOD_AND_BEV` type item. |

## Example (as JSON)

```json
{
  "calorie_count": 36,
  "dietary_preferences": [
    {
      "type": "STANDARD",
      "standard_name": "VEGETARIAN",
      "custom_name": "custom_name8"
    }
  ],
  "ingredients": [
    {
      "type": "STANDARD",
      "standard_name": "MILK",
      "custom_name": "custom_name8"
    },
    {
      "type": "STANDARD",
      "standard_name": "MILK",
      "custom_name": "custom_name8"
    }
  ]
}
```

