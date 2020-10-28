
# Catalog Query Sorted Attribute

The query expression to specify the key to sort search results.

## Structure

`CatalogQuerySortedAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attribute_name` | `string` |  | The attribute whose value is used as the sort key. |
| `initial_attribute_value` | `string` | Optional | The first attribute value to be returned by the query. Ascending sorts will return only<br>objects with this value or greater, while descending sorts will return only objects with this value<br>or less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts). |
| `sort_order` | [`string`](/doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |

## Example (as JSON)

```json
{
  "attribute_name": "attribute_name4",
  "initial_attribute_value": "initial_attribute_value6",
  "sort_order": "DESC"
}
```

