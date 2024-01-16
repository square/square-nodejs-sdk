
# Catalog Item Food and Beverage Details Dietary Preference

Dietary preferences that can be assigned to an `FOOD_AND_BEV` item and its ingredients.

## Structure

`CatalogItemFoodAndBeverageDetailsDietaryPreference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`string \| undefined`](../../doc/models/catalog-item-food-and-beverage-details-dietary-preference-type.md) | Optional | The type of dietary preference for the `FOOD_AND_BEV` type of items and integredients. |
| `standardName` | [`string \| undefined`](../../doc/models/catalog-item-food-and-beverage-details-dietary-preference-standard-dietary-preference.md) | Optional | Standard dietary preferences for food and beverage items that are recommended on item creation. |
| `customName` | `string \| null \| undefined` | Optional | The name of a user-defined custom dietary preference. This should be null if it's a standard dietary preference. |

## Example (as JSON)

```json
{
  "type": "STANDARD",
  "standard_name": "GLUTEN_FREE",
  "custom_name": "custom_name4"
}
```

