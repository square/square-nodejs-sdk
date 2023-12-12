
# Catalog Query

A query composed of one or more different types of filters to narrow the scope of targeted objects when calling the `SearchCatalogObjects` endpoint.

Although a query can have multiple filters, only certain query types can be combined per call to [SearchCatalogObjects](../../doc/api/catalog.md#search-catalog-objects).
Any combination of the following types may be used together:

- [exact_query](../../doc/models/catalog-query-exact.md)
- [prefix_query](../../doc/models/catalog-query-prefix.md)
- [range_query](../../doc/models/catalog-query-range.md)
- [sorted_attribute_query](../../doc/models/catalog-query-sorted-attribute.md)
- [text_query](../../doc/models/catalog-query-text.md)

All other query types cannot be combined with any others.

When a query filter is based on an attribute, the attribute must be searchable.
Searchable attributes are listed as follows, along their parent types that can be searched for with applicable query filters.

Searchable attribute and objects queryable by searchable attributes:

- `name`:  `CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, `CatalogTax`, `CatalogDiscount`, `CatalogModifier`, `CatalogModifierList`, `CatalogItemOption`, `CatalogItemOptionValue`
- `description`: `CatalogItem`, `CatalogItemOptionValue`
- `abbreviation`: `CatalogItem`
- `upc`: `CatalogItemVariation`
- `sku`: `CatalogItemVariation`
- `caption`: `CatalogImage`
- `display_name`: `CatalogItemOption`

For example, to search for [CatalogItem](../../doc/models/catalog-item.md) objects by searchable attributes, you can use
the `"name"`, `"description"`, or `"abbreviation"` attribute in an applicable query filter.

## Structure

`CatalogQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sortedAttributeQuery` | [`CatalogQuerySortedAttribute \| undefined`](../../doc/models/catalog-query-sorted-attribute.md) | Optional | The query expression to specify the key to sort search results. |
| `exactQuery` | [`CatalogQueryExact \| undefined`](../../doc/models/catalog-query-exact.md) | Optional | The query filter to return the search result by exact match of the specified attribute name and value. |
| `setQuery` | [`CatalogQuerySet \| undefined`](../../doc/models/catalog-query-set.md) | Optional | The query filter to return the search result(s) by exact match of the specified `attribute_name` and any of<br>the `attribute_values`. |
| `prefixQuery` | [`CatalogQueryPrefix \| undefined`](../../doc/models/catalog-query-prefix.md) | Optional | The query filter to return the search result whose named attribute values are prefixed by the specified attribute value. |
| `rangeQuery` | [`CatalogQueryRange \| undefined`](../../doc/models/catalog-query-range.md) | Optional | The query filter to return the search result whose named attribute values fall between the specified range. |
| `textQuery` | [`CatalogQueryText \| undefined`](../../doc/models/catalog-query-text.md) | Optional | The query filter to return the search result whose searchable attribute values contain all of the specified keywords or tokens, independent of the token order or case. |
| `itemsForTaxQuery` | [`CatalogQueryItemsForTax \| undefined`](../../doc/models/catalog-query-items-for-tax.md) | Optional | The query filter to return the items containing the specified tax IDs. |
| `itemsForModifierListQuery` | [`CatalogQueryItemsForModifierList \| undefined`](../../doc/models/catalog-query-items-for-modifier-list.md) | Optional | The query filter to return the items containing the specified modifier list IDs. |
| `itemsForItemOptionsQuery` | [`CatalogQueryItemsForItemOptions \| undefined`](../../doc/models/catalog-query-items-for-item-options.md) | Optional | The query filter to return the items containing the specified item option IDs. |
| `itemVariationsForItemOptionValuesQuery` | [`CatalogQueryItemVariationsForItemOptionValues \| undefined`](../../doc/models/catalog-query-item-variations-for-item-option-values.md) | Optional | The query filter to return the item variations containing the specified item option value IDs. |

## Example (as JSON)

```json
{
  "sorted_attribute_query": {
    "attribute_name": "attribute_name0",
    "initial_attribute_value": "initial_attribute_value8",
    "sort_order": "DESC"
  },
  "exact_query": {
    "attribute_name": "attribute_name4",
    "attribute_value": "attribute_value6"
  },
  "set_query": {
    "attribute_name": "attribute_name2",
    "attribute_values": [
      "attribute_values6"
    ]
  },
  "prefix_query": {
    "attribute_name": "attribute_name6",
    "attribute_prefix": "attribute_prefix8"
  },
  "range_query": {
    "attribute_name": "attribute_name0",
    "attribute_min_value": 208,
    "attribute_max_value": 138
  }
}
```

