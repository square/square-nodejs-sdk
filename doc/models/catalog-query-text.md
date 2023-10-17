
# Catalog Query Text

The query filter to return the search result whose searchable attribute values contain all of the specified keywords or tokens, independent of the token order or case.

## Structure

`CatalogQueryText`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keywords` | `string[]` | Required | A list of 1, 2, or 3 search keywords. Keywords with fewer than 3 alphanumeric characters are ignored. |

## Example (as JSON)

```json
{
  "keywords": [
    "keywords1"
  ]
}
```

