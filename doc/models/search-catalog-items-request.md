
# Search Catalog Items Request

Defines the request body for the [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems) endpoint.

## Structure

`SearchCatalogItemsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text_filter` | `string` | Optional | The text filter expression to return items or item variations containing specified text in<br>the `name`, `description`, or `abbreviation` attribute value of an item, or in<br>the `name`, `sku`, or `upc` attribute value of an item variation. |
| `category_ids` | `string[]` | Optional | The category id query expression to return items containing the specified category IDs. |
| `stock_levels` | [`string[]`](/doc/models/search-catalog-items-request-stock-level.md) | Optional | The stock-level query expression to return item variations with the specified stock levels.<br>See [SearchCatalogItemsRequestStockLevel](#type-searchcatalogitemsrequeststocklevel) for possible values |
| `enabled_location_ids` | `string[]` | Optional | The enabled-location query expression to return items and item variations having specified enabled locations. |
| `cursor` | `string` | Optional | The pagination token, returned in the previous response, used to fetch the next batch of pending results. |
| `limit` | `number` | Optional | The maximum number of results to return per page. The default value is 100. |
| `sort_order` | [`string`](/doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |
| `product_types` | [`string[]`](/doc/models/catalog-item-product-type.md) | Optional | The product types query expression to return items or item variations having the specified product types.<br>See [CatalogItemProductType](#type-catalogitemproducttype) for possible values |
| `custom_attribute_filters` | [`CustomAttributeFilter[]`](/doc/models/custom-attribute-filter.md) | Optional | The customer-attribute filter to return items or item variations matching the specified<br>custom attribute expressions. A maximum number of 10 custom attribute expressions are supported in<br>a single call to the [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems) endpoint. |

## Example (as JSON)

```json
{
  "sort_order": "ASC",
  "product_types": [
    "REGULAR"
  ],
  "category_ids": [
    "WINE_CATEGORY_ID"
  ],
  "enabled_location_ids": [
    "ATL_LOCATION_ID"
  ],
  "text_filter": "red",
  "custom_attribute_filters": [
    {
      "custom_attribute_definition_id": "VEGAN_DEFINITION_ID",
      "bool_filter": true
    },
    {
      "custom_attribute_definition_id": "BRAND_DEFINITION_ID",
      "string_filter": "Dark Horse"
    },
    {
      "key": "VINTAGE",
      "number_filter": {
        "min": "2017",
        "max": "2018"
      }
    },
    {
      "custom_attribute_definition_id": "VARIETAL_DEFINITION_ID",
      "selection_ids_filter": "MERLOT_SELECTION_ID"
    }
  ],
  "stock_levels": [
    "OUT",
    "LOW"
  ],
  "limit": 100
}
```

