
# Catalog Category

A category to which a `CatalogItem` instance belongs.

## Structure

`CatalogCategory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Optional | The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. |

## Example (as JSON)

```json
{
  "object": {
    "type": "CATEGORY",
    "id": "#Beverages",
    "present_at_all_locations": true,
    "category_data": {
      "name": "Beverages"
    }
  }
}
```

