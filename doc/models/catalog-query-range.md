
# Catalog Query Range

The query filter to return the search result whose named attribute values fall between the specified range.

## Structure

`CatalogQueryRange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attribute_name` | `string` |  | The name of the attribute to be searched. |
| `attribute_min_value` | `number` | Optional | The desired minimum value for the search attribute (inclusive). |
| `attribute_max_value` | `number` | Optional | The desired maximum value for the search attribute (inclusive). |

## Example (as JSON)

```json
{
  "attribute_name": "attribute_name4",
  "attribute_min_value": 232,
  "attribute_max_value": 114
}
```

