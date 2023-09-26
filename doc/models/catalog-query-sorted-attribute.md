
# Catalog Query Sorted Attribute

The query expression to specify the key to sort search results.

## Structure

`CatalogQuerySortedAttribute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attributeName` | `string` | Required | The attribute whose value is used as the sort key.<br>**Constraints**: *Minimum Length*: `1` |
| `initialAttributeValue` | `string \| null \| undefined` | Optional | The first attribute value to be returned by the query. Ascending sorts will return only<br>objects with this value or greater, while descending sorts will return only objects with this value<br>or less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts). |
| `sortOrder` | [`string \| undefined`](../../doc/models/sort-order.md) | Optional | The order (e.g., chronological or alphabetical) in which results from a request are returned. |

## Example (as JSON)

```json
{
  "attribute_name": "attribute_name2",
  "initial_attribute_value": "initial_attribute_value4",
  "sort_order": "DESC"
}
```

