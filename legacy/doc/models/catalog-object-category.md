
# Catalog Object Category

A category that can be assigned to an item or a parent category that can be assigned
to another category. For example, a clothing category can be assigned to a t-shirt item or
be made as the parent category to the pants category.

## Structure

`CatalogObjectCategory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The ID of the object's category. |
| `ordinal` | `bigint \| null \| undefined` | Optional | The order of the object within the context of the category. |

## Example (as JSON)

```json
{
  "id": "id4",
  "ordinal": 8
}
```

