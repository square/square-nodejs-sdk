
# Catalog Item

A [CatalogObject](../../doc/models/catalog-object.md) instance of the `ITEM` type, also referred to as an item, in the catalog.

## Structure

`CatalogItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | The item's name. This is a searchable attribute for use in applicable query filters, its value must not be empty, and the length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `512` |
| `description` | `string \| null \| undefined` | Optional | The item's description. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.<br><br>Deprecated at 2022-07-20, this field is planned to retire in 6 months. You should migrate to use `description_html` to set the description<br>of the [CatalogItem](entity:CatalogItem) instance.  The `description` and `description_html` field values are kept in sync. If you try to<br>set the both fields, the `description_html` text value overwrites the `description` value. Updates in one field are also reflected in the other,<br>except for when you use an early version before Square API 2022-07-20 and `description_html` is set to blank, setting the `description` value to null<br>does not nullify `description_html`.<br>**Constraints**: *Maximum Length*: `4096` |
| `abbreviation` | `string \| null \| undefined` | Optional | The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used.<br>This attribute is searchable, and its value length is of Unicode code points.<br>**Constraints**: *Maximum Length*: `24` |
| `labelColor` | `string \| null \| undefined` | Optional | The color of the item's display label in the Square Point of Sale app. This must be a valid hex color code. |
| `isTaxable` | `boolean \| null \| undefined` | Optional | Indicates whether the item is taxable (`true`) or non-taxable (`false`). Default is `true`. |
| `availableOnline` | `boolean \| null \| undefined` | Optional | If `true`, the item can be added to shipping orders from the merchant's online store. |
| `availableForPickup` | `boolean \| null \| undefined` | Optional | If `true`, the item can be added to pickup orders from the merchant's online store. |
| `availableElectronically` | `boolean \| null \| undefined` | Optional | If `true`, the item can be added to electronically fulfilled orders from the merchant's online store. |
| `categoryId` | `string \| null \| undefined` | Optional | The ID of the item's category, if any. Deprecated since 2023-12-13. Use `CatalogItem.categories`, instead. |
| `taxIds` | `string[] \| null \| undefined` | Optional | A set of IDs indicating the taxes enabled for<br>this item. When updating an item, any taxes listed here will be added to the item.<br>Taxes may also be added to or deleted from an item using `UpdateItemTaxes`. |
| `modifierListInfo` | [`CatalogItemModifierListInfo[] \| null \| undefined`](../../doc/models/catalog-item-modifier-list-info.md) | Optional | A set of `CatalogItemModifierListInfo` objects<br>representing the modifier lists that apply to this item, along with the overrides and min<br>and max limits that are specific to this item. Modifier lists<br>may also be added to or deleted from an item using `UpdateItemModifierLists`. |
| `variations` | [`CatalogObject[] \| null \| undefined`](../../doc/models/catalog-object.md) | Optional | A list of [CatalogItemVariation](entity:CatalogItemVariation) objects for this item. An item must have<br>at least one variation. |
| `productType` | [`string \| undefined`](../../doc/models/catalog-item-product-type.md) | Optional | The type of a CatalogItem. Connect V2 only allows the creation of `REGULAR` or `APPOINTMENTS_SERVICE` items. |
| `skipModifierScreen` | `boolean \| null \| undefined` | Optional | If `false`, the Square Point of Sale app will present the `CatalogItem`'s<br>details screen immediately, allowing the merchant to choose `CatalogModifier`s<br>before adding the item to the cart.  This is the default behavior.<br><br>If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected<br>modifiers, and merchants can edit modifiers by drilling down onto the item's details.<br><br>Third-party clients are encouraged to implement similar behaviors. |
| `itemOptions` | [`CatalogItemOptionForItem[] \| null \| undefined`](../../doc/models/catalog-item-option-for-item.md) | Optional | List of item options IDs for this item. Used to manage and group item<br>variations in a specified order.<br><br>Maximum: 6 item options. |
| `imageIds` | `string[] \| null \| undefined` | Optional | The IDs of images associated with this `CatalogItem` instance.<br>These images will be shown to customers in Square Online Store.<br>The first image will show up as the icon for this item in POS. |
| `sortName` | `string \| null \| undefined` | Optional | A name to sort the item by. If this name is unspecified, namely, the `sort_name` field is absent, the regular `name` field is used for sorting.<br>Its value must not be empty.<br><br>It is currently supported for sellers of the Japanese locale only. |
| `categories` | [`CatalogObjectCategory[] \| null \| undefined`](../../doc/models/catalog-object-category.md) | Optional | The list of categories. |
| `descriptionHtml` | `string \| null \| undefined` | Optional | The item's description as expressed in valid HTML elements. The length of this field value, including those of HTML tags,<br>is of Unicode points. With application query filters, the text values of the HTML elements and attributes are searchable. Invalid or<br>unsupported HTML elements or attributes are ignored.<br><br>Supported HTML elements include:<br><br>- `a`: Link. Supports linking to website URLs, email address, and telephone numbers.<br>- `b`, `strong`:  Bold text<br>- `br`: Line break<br>- `code`: Computer code<br>- `div`: Section<br>- `h1-h6`: Headings<br>- `i`, `em`: Italics<br>- `li`: List element<br>- `ol`: Numbered list<br>- `p`: Paragraph<br>- `ul`: Bullet list<br>- `u`: Underline<br><br>Supported HTML attributes include:<br><br>- `align`: Alignment of the text content<br>- `href`: Link destination<br>- `rel`: Relationship between link's target and source<br>- `target`: Place to open the linked document<br>**Constraints**: *Maximum Length*: `65535` |
| `descriptionPlaintext` | `string \| undefined` | Optional | A server-generated plaintext version of the `description_html` field, without formatting tags.<br>**Constraints**: *Maximum Length*: `65535` |
| `channels` | `string[] \| null \| undefined` | Optional | A list of IDs representing channels, such as a Square Online site, where the item can be made visible or available. |
| `isArchived` | `boolean \| null \| undefined` | Optional | Indicates whether this item is archived (`true`) or not (`false`). |
| `ecomSeoData` | [`CatalogEcomSeoData \| undefined`](../../doc/models/catalog-ecom-seo-data.md) | Optional | SEO data for for a seller's Square Online store. |
| `foodAndBeverageDetails` | [`CatalogItemFoodAndBeverageDetails \| undefined`](../../doc/models/catalog-item-food-and-beverage-details.md) | Optional | The food and beverage-specific details of a `FOOD_AND_BEV` item. |
| `reportingCategory` | [`CatalogObjectCategory \| undefined`](../../doc/models/catalog-object-category.md) | Optional | A category that can be assigned to an item or a parent category that can be assigned<br>to another category. For example, a clothing category can be assigned to a t-shirt item or<br>be made as the parent category to the pants category. |

## Example (as JSON)

```json
{
  "name": "name6",
  "description": "description6",
  "abbreviation": "abbreviation8",
  "label_color": "label_color8",
  "is_taxable": false
}
```

