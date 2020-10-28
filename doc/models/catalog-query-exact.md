
# Catalog Query Exact

The query filter to return the serch result by exact match of the specified attribute name and value.

## Structure

`CatalogQueryExact`

## Fields

| Name | Type | Description |
|  --- | --- | --- |
| `attribute_name` | `string` | The name of the attribute to be searched. Matching of the attribute name is exact. |
| `attribute_value` | `string` | The desired value of the search attribute. Matching of the attribute value is case insensitive and can be partial.<br>For example, if a specified value of "sma", objects with the named attribute value of "Small", "small" are both matched. |

## Example (as JSON)

```json
{
  "attribute_name": "attribute_name4",
  "attribute_value": "attribute_value6"
}
```

