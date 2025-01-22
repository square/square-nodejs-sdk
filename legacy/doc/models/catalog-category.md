
# Catalog Category

A category to which a `CatalogItem` instance belongs.

## Structure

`CatalogCategory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `255` |
| `imageIds` | `string[] \| null \| undefined` | Optional | The IDs of images associated with this `CatalogCategory` instance.<br>Currently these images are not displayed by Square, but are free to be displayed in 3rd party applications. |
| `categoryType` | [`string \| undefined`](../../doc/models/catalog-category-type.md) | Optional | Indicates the type of a category. |
| `parentCategory` | [`CatalogObjectCategory \| undefined`](../../doc/models/catalog-object-category.md) | Optional | A category that can be assigned to an item or a parent category that can be assigned<br>to another category. For example, a clothing category can be assigned to a t-shirt item or<br>be made as the parent category to the pants category. |
| `isTopLevel` | `boolean \| null \| undefined` | Optional | Indicates whether a category is a top level category, which does not have any parent_category. |
| `channels` | `string[] \| null \| undefined` | Optional | A list of IDs representing channels, such as a Square Online site, where the category can be made visible. |
| `availabilityPeriodIds` | `string[] \| null \| undefined` | Optional | The IDs of the `CatalogAvailabilityPeriod` objects associated with the category. |
| `onlineVisibility` | `boolean \| null \| undefined` | Optional | Indicates whether the category is visible (`true`) or hidden (`false`) on all of the seller's Square Online sites. |
| `rootCategory` | `string \| undefined` | Optional | The top-level category in a category hierarchy. |
| `ecomSeoData` | [`CatalogEcomSeoData \| undefined`](../../doc/models/catalog-ecom-seo-data.md) | Optional | SEO data for for a seller's Square Online store. |
| `pathToRoot` | [`CategoryPathToRootNode[] \| null \| undefined`](../../doc/models/category-path-to-root-node.md) | Optional | The path from the category to its root category. The first node of the path is the parent of the category<br>and the last is the root category. The path is empty if the category is a root category. |

## Example (as JSON)

```json
{
  "object": {
    "category_data": {
      "name": "Beverages"
    },
    "id": "#Beverages",
    "present_at_all_locations": true,
    "type": "CATEGORY"
  },
  "name": "name2",
  "image_ids": [
    "image_ids7",
    "image_ids6",
    "image_ids5"
  ],
  "category_type": "REGULAR_CATEGORY",
  "parent_category": {
    "id": "id4",
    "ordinal": 114
  },
  "is_top_level": false
}
```

